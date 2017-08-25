var score = 0;
var level = 1;
var lost = false;
var highScore = localStorage.getItem('highScore');

if(highScore === 'undefined' || highScore === null){
  highScore = 0;
}

$('#high-score').text('HIGH SCORE: ' + highScore);

var proceed = function(moves){
  $('.to-delete').each(function() {
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
    score += 10;
  });

  $('#score').text('SCORE: ' + score);

  for (var i = 0; i < rows; i++){
    for (var j = 0; j < columns; j++){
      $('.row-'+i+'-column-'+j).removeClass('active to-delete').css('border','2px solid lavender');
    }
  }

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

  var loseGame = function(){
    lost = true;
    $('#gameboard').empty().css('visibility','hidden').css('height','2px');
    var lostMessage = $('<h1>').text("SORRY, YOU RAN OUT OF MOVES :/");
    $('.gameboard-wrapper').append(lostMessage);
    $('#moves-left').text('MOVES LEFT: ' + 0);
    playAgain();
  }

  var winGame = function(){
    lost = true;
    $('#gameboard').empty().css('visibility','hidden').css('height','2px');
    var winMessage = $('<h1>').text('CONGRATULATIONS, YOU WON :)');
    $('.gameboard-wrapper').append(winMessage);
    playAgain();
  }

  //levels

  switch(level){
    case 1:
      $('#moves-left').text('MOVES LEFT: ' + movesLeft);
      if (score >= 100 && score < 200){
        $('.progress-bar-filling').css('height', (530-(0.333*530)) + 'px').css('border-radius', '0px');
      }

      if (score >= 200 && score < 300){
        $('.progress-bar-filling').css('height', (530-(0.66*530)) + 'px').css('border-radius','0px');
      }

      if(score >= 300 && moves <= 15) {
        level = 2;
        movesLeft = (20 - moves);
        $('#moves-left').text('MOVES LEFT: ' + movesLeft);
        $('.progress-bar-filling').css('height', 530 + 'px').css('border-radius','17px');
      } else if (moves === 15 && score < 300){
        loseGame();
      }
      break;
    case 2:
      if (score >= 400 && score < 500){
        $('.progress-bar-filling').css('height', (530-(0.333*530)) + 'px').css('border-radius','0px');
      }

      if (score >= 500 && score < 600){
        $('.progress-bar-filling').css('height', (530-(0.66*530)) + 'px').css('border-radius','0px');
      }
      if(score >= 600 && moves <= 20) {
        level = 3;
        movesLeft = (25 - moves);
        $('#moves-left').text('MOVES LEFT: ' + movesLeft);
        $('.progress-bar-filling').css('height', 530 + 'px').css('border-radius','17px');
      } else if (moves === 20 && score < 600){
        loseGame();
      }
    break;
    case 3:
      if (score >= 700 && score < 800){
        $('.progress-bar-filling').css('height', (530-(0.333*530)) + 'px').css('border-radius','0px');
      }

      if (score >= 800 && score < 900){
        $('.progress-bar-filling').css('height', (530-(0.66*530)) + 'px').css('border-radius','0px');
      }

      if(score >= 900 && moves <= 25) {
        level = 4;
        movesLeft = (35 - moves);
        $('#moves-left').text('MOVES LEFT: ' + movesLeft);
        $('.progress-bar-filling').css('height', 530 + 'px').css('border-radius','17px');
      } else if (moves === 25 && score < 900){
        loseGame();
      }
      break;
    case 4:
      if (score >= 1000 && score < 1200){
        $('.progress-bar-filling').css('height', (530-(0.333*530)) + 'px').css('border-radius','0px');
      }

      if (score >= 1200 && score < 1400){
        $('.progress-bar-filling').css('height', (530-(0.66*530)) + 'px').css('border-radius','0px');
      }
      if(score >= 1400 && moves <= 35) {
        level = 5;
        movesLeft = (40 - moves);
        $('#moves-left').text('MOVES LEFT: ' + movesLeft);
        $('.progress-bar-filling').css('height', 530 + 'px').css('border-radius','17px');
      } else if (moves === 35 && score < 1400){
        loseGame();
      }
      break;
    case 5:
      if (score >= 1500 && score < 1600){
        $('.progress-bar-filling').css('height', (530-(0.333*530)) + 'px').css('border-radius','0px');
      }

      if (score >= 1600 && score < 1700){
        $('.progress-bar-filling').css('height', (530-(0.66*530)) + 'px').css('border-radius','0px');
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
