(function() {
	BO.enableDebugging = true;

	var host = 'localhost';
	var arduino = new BO.IOBoard(host, 8887);

	arduino.addEventListener(BO.IOBoardEvent.READY, onReady);

	function onReady(event) {
		arduino.removeEventListener(BO.IOBoardEvent.READY, onReady);
		window.arduinojs.init();
	}
}());