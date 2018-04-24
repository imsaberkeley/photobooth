'use strict'

var five = require("johnny-five"),
  board,
  potentiometer1,
  forceResistor1,
  forceResistor2;

const { spawn } = require('child_process');

const takePhoto = (callback) => {
  const timestamp = Date.now();
  const previewFilePath = `/static/preview-${timestamp}.jpg`
  const gphoto = spawn('gphoto2', [
    '--set-config',
    'capturetarget=1',
    '--capture-image-and-download',
    '--keep',
    '--port',
    //'usb',
    'usb:020,013',
    //'ptpip:192.168.1.1',
    '--filename',
    `.${previewFilePath}`,
    '--force-overwrite'
  ]);

  let err;
  gphoto.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });


  gphoto.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
    err = data;
  });

  gphoto.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    if(code == 0){
      callback(null, previewFilePath);
    } else {
      callback(err);
    }
  });

}


const WebSocket = require('ws');

let socket
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', (ws) => {
  console.log('Web Socket Client Connected');
  socket = ws
  ws.on('message', (message) => {
    console.log('received: %s', message);
    const msg = JSON.parse(message);
    if(msg.type == 'command') {
      if(msg.command = 'take_photo') {
        console.log('Take Photo');

        takePhoto((err, path) => {
          if(err) {

          } else {
            if(socket && socket.readyState === socket.OPEN) {
              socket.send(JSON.stringify({ 
                event: 'photo_ready',
                path: path
              }));
            }
          }
        });
        // TODO Insert Shell Script
      }
    }

  });

  ws.send(JSON.stringify({ message: 'hello' }));
});

board = new five.Board();

board.on("ready", function() {

  let pot1, fsr1 = 0, fsr2 = 0, fsr2OneShot = false, fsr2Hit = false;

  potentiometer1 = new five.Sensor({
    pin: "A1",
    freq: 250
  });

  forceResistor1 = new five.Sensor({
    pin: "A2",
    freq: 10
  });

  forceResistor2 = new five.Sensor({
    pin: "A0",
    freq: 10
  });


  const sendSensorData = () => {
    if(socket && socket.readyState === socket.OPEN) {
      socket.send(JSON.stringify({ 
        event: 'sensor',
        pot1,
        fsr1,
        fsr2,
        fsr2Hit
      }));
    }
  }

  potentiometer1.on("data", function() {
    pot1 = this.value
    sendSensorData();
  });

  forceResistor1.on("data", function() {
    fsr1 = this.value
    // console.log(fsr1)
    sendSensorData();
  });

  forceResistor2.on("data", function() {
    fsr2 = this.value
    //console.log(fsr2)
    if(!fsr2OneShot) {
      if(fsr2 > 400) {
        fsr2Hit = true
        fsr2OneShot = true
      }
    } else if (fsr2OneShot) {
      fsr2Hit = false
      if(fsr2 < 400) {
        fsr2OneShot = false;
      }
    }

    sendSensorData();
  });

});


