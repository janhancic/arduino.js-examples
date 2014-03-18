(function() {
	var led,
		colorInput = document.getElementById('colorSelector');

	function init(arduino) {
		led = new BO.io.RGBLED(
			arduino,
			arduino.getDigitalPin(9), // red
			arduino.getDigitalPin(10), // green
			arduino.getDigitalPin(11) // blue
		);

		// setInterval(function() {
		// 	led.setColor(
		// 		Math.floor(Math.random() * 255),
		// 		Math.floor(Math.random() * 255),
		// 		Math.floor(Math.random() * 255)
		// 	);
		// }, 250);
	}

	window.colorSelectorChange = function() {
		console.log(colorInput.value);
		led.setColor(
			hexToRgb(colorInput.value).r,
			hexToRgb(colorInput.value).g,
			hexToRgb(colorInput.value).b
		);
	}.bind(this);

	function hexToRgb(hex) {
	    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	    return result ? {
	        r: parseInt(result[1], 16),
	        g: parseInt(result[2], 16),
	        b: parseInt(result[3], 16)
	    } : null;
	}

	window.arduinojs = init;
}());