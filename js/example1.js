(function() {
	var led;

	function init() {
		//Declare pins & start app here
		led = new BO.io.LED(arduino, arduino.getDigitalPin(6));
		led.blink();
	}

	window.arduinojs = init;
}());