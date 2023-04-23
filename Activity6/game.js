var button = document.getElementById("button");
var game = document.getElementById("game");
var score = 0;
var level = 1;
var timeout = 500;

function moveButton() {
  var x = Math.floor(Math.random() * (game.offsetWidth - button.offsetWidth));
  var y = Math.floor(Math.random() * (game.offsetHeight - button.offsetHeight));
  button.style.marginLeft = x + "px";
  button.style.marginTop = y + "px";
}

function catchButton() {
  score++;
  if (score === 3) {
    alert("Level " + level + " completed! Congratulations!");
    level++;
    score = 0;
    timeout -= 100;
    if (level === 7) {
      alert("You won the game! Congratulations, you have completed all the levels!");
      return;
    }
    setTimeout(function() {
      alert("Level " + level + " starting!");
      playGame();
    }, 1000);
  } else {
    alert("You got the button! Now you need to catch " + score + " times");
  }
}

function playGame() {
  moveButton();
  setTimeout(function() {
    playGame();
  }, timeout);
}

playGame();