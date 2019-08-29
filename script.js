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
resetButton.addEventListener("click", function() {
	this.textContent = "New Colors";
	document.querySelector("h1").style.backgroundColor = "steelblue";
	reset();
});
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "CORRECT";
			changeColors(pickedColor);
			document.querySelector("h1").style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";	
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "TRY AGAIN";
		}
	});
}

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

function reset() {
	var x = document.getElementsByClassName("hide");
	if (numOfSquares == 6) {
		x[0].style.display = "block";
		x[1].style.display = "block";
		x[2].style.display = "block";
		colors = generateColors(6);
	}
	else {
		x[0].style.display = "none";
		x[1].style.display = "none";
		x[2].style.display = "none";
		colors = generateColors(3);
	}
	init();
	messageDisplay.textContent = "";
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(length) {
	return Math.floor(Math.random() * length);
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