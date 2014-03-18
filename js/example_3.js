(function() {
	var led;

	function init(arduino) {
		led = new BO.io.RGBLED(
			arduino,
			arduino.getDigitalPin(9), // red
			arduino.getDigitalPin(10), // green
			arduino.getDigitalPin(11) // blue
		);

		setInterval(function() {
			led.setColor(
				Math.floor(Math.random() * 255),
				Math.floor(Math.random() * 255),
				Math.floor(Math.random() * 255)
			);
		}, 250);
	}

	window.arduinojs = init;
}());