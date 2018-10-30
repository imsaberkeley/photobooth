Photo Booth
===========

## Requirements
* A Laptop
* A Camera that is compatible with [gphoto](http://gphoto.org/proj/libgphoto2/support.php)
* An Arduino
* A Force Resistant Sensor (FSR)

## Getting Started on macOS
* Install gphoto2 on macOS (See [here](http://macappstore.org/gphoto2/) for instructions)
* Construct the Arduino / FSR unit according to a schema (To be updated)
* Flash Arduino with a Firmata firmware that is compatible with JonnyFive (See Johnny Five [docs](http://johnny-five.io) for detail). For Arduini UNO, it's the StandardFirmata Plus.
* Clone this repository
* `npm install`
* Open two terminal sessions. One running `npm run arduino`
* Another terminal runs `npm run dev`
* Goto [http://localhost:3000](http://localhost:3000) and try to step on the FSR.

## Fine tuning
The force threshold for activation could be set in `arduino.js`