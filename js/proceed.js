var score = 0;
var level = 1;
var lost = false;

var proceed = function(moves){
  $('.to-delete').each(function() {
    $(this).fadeOut('slow').delay(300);
    $(this).css('background-image', 'none');
    var randNum = Math.floor(Math.random() * 6) + 1;

    switch(randNum) {
      case 1:
        $(this).fadeIn('slow').css('background-image', 'url(file:///Users/jzv795/Documents/CODA/unit-1-project/images/blue-diamond.jpeg)');
        break;
      case 2:
        $(this).fadeIn('slow').css('background-image', 'url(file:///Users/jzv795/Documents/CODA/unit-1-project/images/green-diamond.jpg)');
        break;
      case 3:
        $(this).fadeIn('slow').css('background-image', 'url(file:///Users/jzv795/Documents/CODA/unit-1-project/images/pink-sapphire.jpg)');
        break;
      case 4:
        $(this).fadeIn('slow').css('background-image', 'url(file:///Users/jzv795/Documents/CODA/unit-1-project/images/blue-gem.jpg)');
        break;
      case 5:
        $(this).fadeIn('slow').css('background-image', 'url(file:///Users/jzv795/Documents/CODA/unit-1-project/images/rubellite-tourmaline.jpg)');
        break;
      case 6:
        $(this).fadeIn('slow').css('background-image', 'url(file:///Users/jzv795/Documents/CODA/unit-1-project/images/pink-tourmaline.jpg)');
        break;
    }
    score += 10;
  });

  $('#score').text('SCORE: ' + score);

  for (var i = 0; i < 6; i++){
    for (var j = 0; j < 13; j++){
      $('.row-'+i+'-column-'+j).removeClass('active to-delete').css('border','2px solid lavender');
    }
  }

  var loseGame = function(){
    lost = true;
    $('#gameboard').remove();
    var lostMessage = $('<h1>');
    lostMessage.text('SORRY, YOU LOST :/');
    $('.gameboard-wrapper').append(lostMessage);
  }

  var winGame = function(){
    lost = true;
    $('#gameboard').remove();
    var winMessage = $('<h1>');
    winMessage.text('CONGRATULATIONS, YOU WON :)');
    $('.gameboard-wrapper').append(winMessage);
  }

  //levels

  switch(level){
    case 1:
      if(score >= 300 && moves <= 15) {
        level = 2;
      } else if (moves === 15 && score < 300){
        loseGame();
      }
      break;
    case 2:
      if(score >= 600 && moves <= 20) {
        level = 3;
      } else if (moves === 20 && score < 600){
        loseGame();
      }
    break;
    case 3:
      if(score >= 1000 && moves <= 25) {
        level = 4;
      } else if (moves === 25 && score < 1000){
        loseGame();
      }
      break;
    case 4:
      if(score >= 1500 && moves <= 30) {
        level = 5;
      } else if (moves === 30 && score < 1500){
        loseGame();
      }
      break;
    case 5:
      if(score >= 2000 && moves <= 35) {
        winGame();
      } else if (moves === 35 && score < 2000){
        loseGame();
      }
      break;
  }


  $('#level').text('LEVEL: ' + level);
}
