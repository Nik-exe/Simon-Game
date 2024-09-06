var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var buttonColors = ["red", "green", "blue", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);

  $("#" + randomChoosenColor)
    .fadeOut(100)
    .fadeIn(100, function () {
      playSound(randomChoosenColor);
    });

    level++;
    $("h1").text("level " + level);
  }
  
  $(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  });
  function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function () {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(sound) {
  var btn = sound;
  switch (btn) {
    case "blue":
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
    case "red":
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case "green":
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
    case "yellow":
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

$(document).keypress(function () {
  var started = false;
  if (!started) {
    nextSequence();

    started = true;
  }
  $("h1").text("level 0");
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Success");
    if (currentLevel === gamePattern.length-1) {
      setTimeout(nextSequence, 1000);
      userClickedPattern = [];
    }
  } else {
    console.log("Wrong");
    var aud = new Audio('sounds/wrong.mp3')
    aud.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200)
    
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}
function startOver(){
 var gamePattern = [];
 var userClickedPattern = [];
 var level = 0;
}