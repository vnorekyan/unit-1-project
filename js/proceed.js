var score = 0;
var level = 1;
var lost = false;
var highScore = localStorage.getItem('highScore');

//if there is no high score saved in local storage, set high score to 0
if(highScore === 'undefined' || highScore === null){
  highScore = 0;
}

$('#high-score').text('HIGH SCORE: ' + highScore);

//scorekeeping and levels
var proceed = function(moves){
  $('.to-delete').each(function() {
    //remove background image for cells marked for deletion and replace with new random image
    $(this).css('background-image', 'none');
    var randNum = Math.floor(Math.random() * 6) + 1;

    switch(randNum) {
      case 1:
        $(this).css('background-image', 'url(https://vnorekyan.github.io/unit-1-project/images/blue-diamond.jpeg)');
        break;
      case 2:
        $(this).css('background-image', 'url(https://vnorekyan.github.io/unit-1-project/images/green-diamond.jpg)');
        break;
      case 3:
        $(this).css('background-image', 'url(https://vnorekyan.github.io/unit-1-project/images/pink-sapphire.jpg)');
        break;
      case 4:
        $(this).css('background-image', 'url(https://vnorekyan.github.io/unit-1-project/images/blue-gem.jpg)');
        break;
      case 5:
        $(this).css('background-image', 'url(https://vnorekyan.github.io/unit-1-project/images/rubellite-tourmaline.jpg)');
        break;
      case 6:
        $(this).css('background-image', 'url(https://vnorekyan.github.io/unit-1-project/images/diamond.png)');
        break;
    }
    //update score
    score += 10;
  });

  $('#score').text('SCORE: ' + score);

  for (var i = 0; i < rows; i++){
    for (var j = 0; j < columns; j++){
      //clear the highligting
      $('.row-'+i+'-column-'+j).removeClass('active to-delete').css('border','2px solid lavender');
    }
  }

  //play again button created and high score saved in local storage
  var playAgain = function(){
    var playButton = $('<button>').text('PLAY AGAIN');
    $('.gameboard-wrapper').append(playButton);
    playButton.on('click',function() {
      console.log('hi');
      createBoard();
      populateBoard();
      $('#gameboard').css('visibility','visible').css('height','560px');
      $('button').remove();
      $('.gameboard-wrapper h1').remove();
      if(score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
      }
      score = 0;
      level = 1;
      moves = 0;
      movesLeft = 15;
      $('#high-score').text('HIGH SCORE: ' + highScore);
      $('#score').text('SCORE: ' + score);
      $('#level').text('LEVEL: ' + level);
      $('#number-moves').text('NUMBER OF MOVES: ' + moves);
      $('#moves-left').text('MOVES LEFT: ' + movesLeft);
      $('.progress-bar-filling').css('height', 530 + 'px');
    });

  }

  //losing message
  var loseGame = function(){
    lost = true;
    $('#gameboard').empty().css('visibility','hidden').css('height','2px');
    var lostMessage = $('<h1>').text("SORRY, YOU RAN OUT OF MOVES :/");
    $('.gameboard-wrapper').append(lostMessage);
    $('#moves-left').text('MOVES LEFT: ' + 0);
    playAgain();
  }

  //winning message
  var winGame = function(){
    lost = true;
    $('#gameboard').empty().css('visibility','hidden').css('height','2px');
    var winMessage = $('<h1>').text('CONGRATULATIONS, YOU WON :)');
    $('.gameboard-wrapper').append(winMessage);
    playAgain();
  }

  //progressing to levels and setting the height of the progress bar filling
  switch(level){
    case 1:
      $('#moves-left').text('MOVES LEFT: ' + movesLeft);

      if (score >= 30 && score < 75){
        $('.progress-bar-filling').css('height', (530-(0.1*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 75 && score < 100){
        $('.progress-bar-filling').css('height', (530-(0.25*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 100 && score < 150){
        $('.progress-bar-filling').css('height', (530-(0.333*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 150 && score < 200){
        $('.progress-bar-filling').css('height', (530-(0.5*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 200 && score < 225){
        $('.progress-bar-filling').css('height', (530-(0.66*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 225 && score < 240){
        $('.progress-bar-filling').css('height', (530-(0.75*530)) + 'px').css('border-radius','5px');
      }

      if (score >= 240 && score < 270){
        $('.progress-bar-filling').css('height', (530-(0.8*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 270 && score < 300){
        $('.progress-bar-filling').css('height', (530-(0.9*530)) + 'px').css('border-radius', '5px');
      }

      if(score >= 300 && moves <= 15) {
        level = 2;
        movesLeft = (20 - moves);
        $('#moves-left').text('MOVES LEFT: ' + movesLeft);
        $('.progress-bar-filling').css('height', 530 + 'px').css('border-radius','10px');
      } else if (moves === 15 && score < 300){
        loseGame();
      }
      break;
    case 2:
      if (score >= 330 && score < 375){
        $('.progress-bar-filling').css('height', (530-(0.1*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 375 && score < 400){
        $('.progress-bar-filling').css('height', (530-(0.25*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 400 && score < 450){
        $('.progress-bar-filling').css('height', (530-(0.333*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 450 && score < 500){
        $('.progress-bar-filling').css('height', (530-(0.5*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 500 && score < 525){
        $('.progress-bar-filling').css('height', (530-(0.66*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 525 && score < 540){
        $('.progress-bar-filling').css('height', (530-(0.75*530)) + 'px').css('border-radius','5px');
      }

      if (score >= 540 && score < 570){
        $('.progress-bar-filling').css('height', (530-(0.8*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 570 && score < 600){
        $('.progress-bar-filling').css('height', (530-(0.9*530)) + 'px').css('border-radius', '5px');
      }

      if(score >= 600 && moves <= 20) {
        level = 3;
        movesLeft = (25 - moves);
        $('#moves-left').text('MOVES LEFT: ' + movesLeft);
        $('.progress-bar-filling').css('height', 530 + 'px').css('border-radius','10px');
      } else if (moves === 20 && score < 600){
        loseGame();
      }
    break;
    case 3:
      if (score >= 630 && score < 675){
        $('.progress-bar-filling').css('height', (530-(0.1*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 675 && score < 700){
        $('.progress-bar-filling').css('height', (530-(0.25*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 700 && score < 750){
        $('.progress-bar-filling').css('height', (530-(0.333*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 750 && score < 800){
        $('.progress-bar-filling').css('height', (530-(0.5*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 800 && score < 825){
        $('.progress-bar-filling').css('height', (530-(0.66*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 825 && score < 840){
        $('.progress-bar-filling').css('height', (530-(0.75*530)) + 'px').css('border-radius','5px');
      }

      if (score >= 840 && score < 870){
        $('.progress-bar-filling').css('height', (530-(0.8*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 870 && score < 900){
        $('.progress-bar-filling').css('height', (530-(0.9*530)) + 'px').css('border-radius', '5px');
      }

      if(score >= 900 && moves <= 25) {
        level = 4;
        movesLeft = (35 - moves);
        $('#moves-left').text('MOVES LEFT: ' + movesLeft);
        $('.progress-bar-filling').css('height', 530 + 'px').css('border-radius','10px');
      } else if (moves === 25 && score < 900){
        loseGame();
      }
      break;
    case 4:
      if (score >= 950 && score < 1000){
        $('.progress-bar-filling').css('height', (530-(0.1*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 1000 && score < 1100){
        $('.progress-bar-filling').css('height', (530-(0.2*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 1100 && score < 1200){
        $('.progress-bar-filling').css('height', (530-(0.4*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 1200 && score < 1300){
        $('.progress-bar-filling').css('height', (530-(0.6*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 1300 && score < 1400){
        $('.progress-bar-filling').css('height', (530-(0.8*530)) + 'px').css('border-radius', '5px');
      }

      if(score >= 1400 && moves <= 35) {
        level = 5;
        movesLeft = (40 - moves);
        $('#moves-left').text('MOVES LEFT: ' + movesLeft);
        $('.progress-bar-filling').css('height', 530 + 'px').css('border-radius','10px');
      } else if (moves === 35 && score < 1400){
        loseGame();
      }
      break;
    case 5:
      if (score >= 1430 && score < 1475){
        $('.progress-bar-filling').css('height', (530-(0.1*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 1475 && score < 1500){
        $('.progress-bar-filling').css('height', (530-(0.25*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 1500 && score < 1550){
        $('.progress-bar-filling').css('height', (530-(0.333*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 1550 && score < 1600){
        $('.progress-bar-filling').css('height', (530-(0.5*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 1600 && score < 1625){
        $('.progress-bar-filling').css('height', (530-(0.66*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 1625 && score < 1640){
        $('.progress-bar-filling').css('height', (530-(0.75*530)) + 'px').css('border-radius','5px');
      }

      if (score >= 1640 && score < 1670){
        $('.progress-bar-filling').css('height', (530-(0.8*530)) + 'px').css('border-radius', '5px');
      }

      if (score >= 1670 && score < 1700){
        $('.progress-bar-filling').css('height', (530-(0.9*530)) + 'px').css('border-radius', '5px');
      }

      if(score >= 1700 && moves <= 40) {
        winGame();
      } else if (moves === 40 && score < 1700){
        loseGame();
      }
      break;
  }


  $('#level').text('LEVEL: ' + level);
}
