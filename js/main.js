(function() {

  var populateBoard = function() {

    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var randNum = Math.floor(Math.random() * 6) + 1;

        switch(randNum) {
          case 1:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(./images/blue-diamond.jpeg)');
            break;
          case 2:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(./images/green-diamond.jpg)');
            break;
          case 3:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(./images/pink-sapphire.jpg)');
            break;
          case 4:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(./images/blue-gem.jpg)');
            break;
          case 5:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(./images/rubellite-tourmaline.jpg)');
            break;
          case 6:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(./images/pink-tourmaline.jpg)');
            break;
        }
      }
    }
  }

  var createBoard = function() {
    for (let i = 0; i < 9; i++) {
      var row = $('<tr>').attr('id', 'row-'+i);
      $('#gameboard')[0].append(row[0]);
      for (let j = 0; j < 9; j++) {
        var cell = $('<td>').addClass('row-'+i+'-column-'+j);
        var clicked = [];
        cell.on('click', function() {
          console.log($(this).attr('class'));
          if (clicked.length === 0) {
            clicked.push(this);
            $(this).css('border','2px solid red');
          } else if (clicked.length === 1) {
            clicked.push(this);
            $(this).css('border','2px solid red');
            var first = clicked[0];
            var second = clicked[1];

            //swap the background images of the 2 clicked elements
            var temp = first.style.backgroundImage;
            first.style.backgroundImage = second.style.backgroundImage;
            second.style.backgroundImage = temp;
            first.style.border = '2px solid violet';
            second.style.border = '2px solid violet';
            console.log('2 clicked!');
            clicked = [];
          }
        });
        $('#row-'+i)[0].append(cell[0]);
      }
    }
    console.log($('#gameboard')[0]);
  }



  createBoard();
  populateBoard();

})();
