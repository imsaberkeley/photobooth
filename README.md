Photo Booth
===========

## Requirements
* A Laptop
* A Camera that is compatible with [gphoto](http://gphoto.org/proj/libgphoto2/support.php)
* An Arduino
* A Force Resistant Sensor (FSR)

## Getting Started on macOS
* Install gphoto2 on macOS (See [here](http://macappstore.org/gphoto2/) for instructions)
* Connect the camera to the laptop using an appropriate USB cable. Verify the connection with the command `gphoto2 --auto-detect`. Connect and unconnect the camera to see the port list changes.
* Try to take photo through gphoto2 and command line with the `test_gphoto.sh` script. Change port parameters accordingly 
* Construct the Arduino / FSR unit according to a schema (To be updated)
* Flash Arduino with a Firmata firmware that is compatible with JonnyFive (See Johnny Five [docs](http://johnny-five.io) for detail). For Arduino UNO, it's the StandardFirmata Plus.
* Clone this repository
* `npm install`
* Open two terminal sessions. One running `npm run arduino`
* Another terminal runs `npm run dev`
* Goto [http://localhost:3000](http://localhost:3000) and try to step on the FSR.

## Cameras tested
* Nikon D5300

## Troubleshooting
* gphoto2 responded with PTPTimeout: The transfer of image to your computer might have taken too long. Try reduce the size of the image in the camera.
* gphoto2 cannot connect to the camera: Some machine will have a default PTP service running. Try disable that with the `kill_default_ptp.sh` script.

## Fine tuning
The force threshold for activation could be set in `arduino.js`