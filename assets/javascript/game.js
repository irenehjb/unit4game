
var button = {
    blue:
    {
      name: "Blue",
      value: 0
    },
    green:
    {
      name: "Green",
      value: 0
    },
    red:
    {
      name: "Red",
      value: 0
    },
    white:
    {
      name: "White",
      value: 0
    }
  };
  
  var currentScore = 0;
  var randomNumber = 0;
  var wins = 0;
  var losses = 0;
  var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // game start
  var startGame = function() {
    currentScore = 0;
  
    // score range
    randomNumber = getRandom(4, 36);
  
    // button value
    button.blue.value = getRandom(1, 9);
    button.red.value = getRandom(1, 9);
    button.green.value = getRandom(1, 9);
    button.white.value = getRandom(1, 9);
  
    $("#your-score").text(currentScore);
    $("#random-number").text(randomNumber);
  
    // Console
    console.log("-----------------------------------");
    console.log("Random Number: " + randomNumber);
    console.log("Blue: " + button.blue.value + " | Green: " + button.green.value + " | Red: " + button.red.value +
      " | White: " + button.white.value);
    console.log("-----------------------------------");
  };


  // win or loss
  var result = function() {
    if (currentScore > randomNumber) {
      console.log("Lost");
      lossed++;
      $("#lose").text(losses);
      startGame();
    }
  
    else if (currentScore === randomNumber) {
      console.log("Won");
      wins++;
      $("#win").text(wins);
      startGame();
    }
  };
  
  // clicks
  var addNumbers = function(clickedCrystal) {
    currentScore += clickedCrystal.value;
    $("#your-score").text(currentScore);
  
    //result
    result();
  };
  
  
  // game start
  startGame();
  
  $("#blue").click(function() {
    addNumbers(button.blue);
  });
  
  $("#red").click(function() {
    addNumbers(button.red);
  });
  
  $("#green").click(function() {
    addNumbers(button.green);
  });
  
  $("#white").click(function() {
    addNumbers(button.white);
  });
  