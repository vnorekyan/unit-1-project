var score = 0;



var proceed = function(){
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
}
