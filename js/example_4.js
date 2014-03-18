(function() {
	var btn;

	function init(arduino) {
		btn = new BO.io.Button(arduino, arduino.getDigitalPin(10), BO.io.Button.PULL_UP);
		btn.addEventListener(BO.io.ButtonEvent.PRESS, onPress);

		function onPress(event) {
			console.log('pressed!');

			btn.addEventListener(BO.io.ButtonEvent.RELEASE, onRelease);
		}

		function onRelease(event) {
			console.log('released');
			btn.removeEventListener(BO.io.ButtonEvent.RELEASE, onRelease);
		}
	}

	window.arduinojs = init;
}());