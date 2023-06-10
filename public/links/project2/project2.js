"use strict";

//Create the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
bgReady = true;
};
bgImage.src = "background.png";

//Bug image
var bugReady = false;
var bugImage = new Image();
bugImage.onload = function () {
bugReady = true;
};
bugImage.src = "bug.png";

//Game variables
var score = 0;
var interval = 1000; //initial bug hopping interval in milliseconds
var bugX = canvas.width / 2; //x-coordinate of the bug's position, which starts at half the width of the canvas
var bugY = canvas.height / 2; //y-coordinate of the bug's position, which starts at half the height of the canvas
var bugInterval = setInterval(moveBug, interval);

//Move bug randomly
function moveBug() {
  // Calculate new bug position
  bugX += Math.random() * 200 - 100;
  bugY += Math.random() * 200 - 100;

  //Check if bug is inside canvas
  if (bugX < 0 || bugX > canvas.width - bugImage.width) {
    bugX = canvas.width / 2;
  }
  if (bugY < 0 || bugY > canvas.height - bugImage.height) {
    bugY = canvas.height / 2;
  }
}

//Handle mouse click events
canvas.addEventListener('click', function(mouseClick) {
  // Check if the click was on the bug
  if (mouseClick.offsetX > bugX && mouseClick.offsetX < bugX + bugImage.width &&
    mouseClick.offsetY > bugY && mouseClick.offsetY < bugY + bugImage.height) {
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
    interval -= 50; // decrement interval by 50 milliseconds
    clearInterval(bugInterval);
    bugInterval = setInterval(moveBug, interval);
    bugX = Math.random() * (canvas.width - bugImage.width);
    bugY = Math.random() * (canvas.height - bugImage.height);
  }
});
  
//Reset score button
document.getElementById("resetScoreButton").addEventListener("click", function() {
  score = 0;
  document.getElementById("score").innerHTML = "Score: " + score;
});

//Reset speed button
document.getElementById("resetSpeedButton").addEventListener("click", function() {
  interval = 1000; // reset interval to 1000 milliseconds
  clearInterval(bugInterval);
  bugInterval = setInterval(moveBug, interval);
});

//Draw everything
function render() {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
  }

  if (bugReady) {
    ctx.drawImage(bugImage, bugX, bugY);
  }
}

//Main game loop
function main() {
  render();
  requestAnimationFrame(main);
}

//Start the game
main();
