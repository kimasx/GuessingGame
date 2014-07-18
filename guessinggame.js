$(document).ready(function() {
  
  //generate random number
  var answer = Math.floor(Math.random()*100);
  
  // initialize number of available guesses to five
  var numOfGuesses = 5;

  // initialize empty array to store user guesses
  var guessArray = [];
  
  // declare variables to be used
  var userGuess, accuracy, usedNum;
  
  $("#guess").click(function() {
    userGuess = $("#userGuess").val();
    // get difference b.w answer and player's guess
    var gap = Math.abs(userGuess - answer);
    
    
    // check to see if user input is b.w 1-100.
    if (userGuess > 100 || userGuess < 1)
    {
      accuracy = "Please select a number between 1 & 100.";
      $('#accuracy').html(accuracy);
    }

    // check if input has already been given
    else if (jQuery.inArray(userGuess, guessArray) !== -1)
    {
      accuracy = "You already guessed that number. Try something else.";
      $('#accuracy').html(accuracy);
    }

    // given the correct input, do the following: 
    else {
      // if player guess is correct...
      if (gap === 0)
      {
        accuracy = "HOORAY!! YOU WIN! Click 'Restart Game' button to play again.";
      }
      // else if guess is wrong by these differences...
      else if (gap <=50 && gap >25) 
      { 
        accuracy = "ICE COLD.";
        if (userGuess > answer) {
          accuracy += ' Guess Lower.';
        }
        else if (userGuess < answer) {
          accuracy += ' Guess Higher.';
        }
        numOfGuesses--;
      }
      else if (gap <= 25 && gap > 15 )
      {
        accuracy = "COLD.";
        if (userGuess > answer) {
          accuracy += ' Guess Lower.';
        }
        else if (userGuess < answer) {
          accuracy += ' Guess Higher.';
        }      
        numOfGuesses--;
      }
      else if (gap <= 15 && gap > 10)
      {
        accuracy = "WARMER.";
        if (userGuess > answer) {
          accuracy += ' Guess Lower.';
        }
        else if (userGuess < answer) {
          accuracy += ' Guess Higher.';
        }
        numOfGuesses--;
      }
      else if (gap <= 10 && gap > 5)
      {
        accuracy = "HOT.";
        if (userGuess > answer) {
          accuracy += ' Guess Lower.';
        }
        else if (userGuess < answer) {
          accuracy += ' Guess Higher.';
        }  
        numOfGuesses--;
      }
      else if (gap <= 5 && gap > 0)
      {
        accuracy = "BOILING HOT.";
        if (userGuess > answer) {
          accuracy += ' Guess Lower.';
        }
        else if (userGuess < answer) {
          accuracy += ' Guess Higher.';
        }
        numOfGuesses--;
      }
      else
      {
        accuracy = "FREEZING. WAY OFF!";
        if (userGuess > answer) {
          accuracy += ' Guess Lower.';
        }
        else if (userGuess < answer) {
          accuracy += ' Guess Higher.';
        }
        numOfGuesses--;
      }
      
      guessArray.push(userGuess);  // store player input in array
      
      // check how many gueses left
      if (numOfGuesses <= 0) {
        accuracy = ' The number was ' + answer + '. Click "Restart Game" to play again.';
      }
      else {
        accuracy += ' You have ' + numOfGuesses + ' guesses left.';
      }

      // update display 
      $('#accuracy').html(accuracy);
      $(this).select();
    }
  });

// restart game
$('#reset').click(function() {
  numOfGuesses = 5;
  answer = Math.floor(Math.random()*100);
  guessArray = [];
  $('#accuracy') .html('');
  // clear input field
  $('#userGuess').val('');
});

});