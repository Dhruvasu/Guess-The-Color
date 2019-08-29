var colors;
var squares;
var colorDisplay;
var messageDisplay;
var pickedColor;
var resetButton = document.getElementById("newColors");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numOfSquares = 6;

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateColors(3);
	var x = document.getElementsByClassName("hide");
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	numOfSquares = 3;
	init();
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateColors(6);
	var x = document.getElementsByClassName("hide");
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "block";
	}
	numOfSquares = 6;
	init();
});

colors = generateColors(6);
init();

function init() {
	squares = document.querySelectorAll(".square");
	colorDisplay = document.getElementById("colorDisplay");
	messageDisplay = document.querySelector("#message");
	pickedColor = colors[pickColor(colors.length)];
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	colorDisplay.textContent = pickedColor;
}

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