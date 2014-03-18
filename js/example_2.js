(function() {
	var led;

	function init(arduino) {
		led = new BO.io.LED(arduino, arduino.getDigitalPin(6));
		led.fadeIn(3000);
		setTimeout(function() {
			led.fadeOut(3000);
		}, 3500);
	}

	window.arduinojs = init;
}());