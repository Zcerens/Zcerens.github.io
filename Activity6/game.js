// Define variables
var button = document.getElementById("myButton"); // ID is myButton, not button
var scoreDisplay = document.getElementById("score");
var score = 0;
var level = 1;
var timeout = 500;

// Define function to move the button
function moveButton() {
  var button = document.getElementById("myButton"); // ID is myButton, not button
  var gameArea = document.getElementById("gameArea");
  var gameAreaRect = gameArea.getBoundingClientRect();
  var buttonRect = button.getBoundingClientRect();

  var topBound = gameAreaRect.top;
  var leftBound = gameAreaRect.left;
  var bottomBound = gameAreaRect.bottom - buttonRect.height;
  var rightBound = gameAreaRect.right - buttonRect.width;

  var newTop = Math.floor(Math.random() * (bottomBound - topBound)) + topBound;
  var newLeft = Math.floor(Math.random() * (rightBound - leftBound)) + leftBound;

  button.style.top = newTop + "px";
  button.style.left = newLeft + "px";

  // Success message
  // var successMsg = document.createElement("p");
  // successMsg.textContent = "Good job! Keep going...";
  // gameArea.appendChild(successMsg);
  // setTimeout(() => {
  //   successMsg.remove();
  // }, 1000);
}

// Add event listener to button
button.addEventListener("click", function() {
    // Increase score and update score display
    score++;
    scoreDisplay.innerHTML = "Score: " + score;

    // Check if player has won the level
    if (score % 3 === 0) {
        // Increase level and decrease timeout
        level++;
        timeout -= 100;

        // Display level message
        alert("Congratulations! You have advanced to level " + level + ".");

        // Reset score
        score = 0;

        // Set timeout for next level
        if (level === 6) {
            timeout = 0;
        }
        setTimeout(function() {
            setInterval(moveButton, timeout);
        }, 1000);
    }

    // Check if player has won the game
    if (level > 6) {
        alert("Congratulations! You have completed the game.");
    }
});
