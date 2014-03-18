(function() {
	var led;

	function init(arduino) {
		led = new BO.io.LED(arduino, arduino.getDigitalPin(6));
		led.blink();
	}

	window.arduinojs = init;
}());