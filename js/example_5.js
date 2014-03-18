(function() {
	var btn,
		led,
		isOn = false;

	function init(arduino) {
		led = new BO.io.LED(arduino, arduino.getDigitalPin(6));
		btn = new BO.io.Button(arduino, arduino.getDigitalPin(10), BO.io.Button.PULL_UP);
		btn.addEventListener(BO.io.ButtonEvent.PRESS, onPress);

		function onPress(event) {
			console.log('pressed!');

			if (isOn === true) {
				led.off();
			} else {
				led.on();
			}

			btn.addEventListener(BO.io.ButtonEvent.RELEASE, onRelease);
		}

		function onRelease(event) {
			console.log('released');
			isOn = !isOn;
			btn.removeEventListener(BO.io.ButtonEvent.RELEASE, onRelease);
		}
	}

	window.arduinojs = init;
}());