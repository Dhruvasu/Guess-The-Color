var colors;
var resetButton = document.getElementById("newColors");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numOfSquares = 6;

colors = generateColors(6);

function generateColors(num) {
	var listOfColors = [];
	for (var i = 0; i < num; i++) {
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		listOfColors.push("rgb(" + red + ", " + green + ", " + blue + ")");
	}
	return listOfColors;
}