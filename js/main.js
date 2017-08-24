var rows = 6;
var columns = 10;

var populateBoard = function() {

    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
        var randNum = Math.floor(Math.random() * 6) + 1;

        switch(randNum) {
          case 1:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(https://vnorekyan.github.io/unit-1-project/images/blue-diamond.jpeg)');
            break;
          case 2:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(https://vnorekyan.github.io/unit-1-project/images/green-diamond.jpg)');
            break;
          case 3:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(https://vnorekyan.github.io/unit-1-project/images/pink-sapphire.jpg)');
            break;
          case 4:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(https://vnorekyan.github.io/unit-1-project/images/blue-gem.jpg)');
            break;
          case 5:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(https://vnorekyan.github.io/unit-1-project/images/rubellite-tourmaline.jpg)');
            break;
          case 6:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(https://vnorekyan.github.io/unit-1-project/images/diamond.png)');
            break;
        }
      }
    }
  }

  var createBoard = function() {
    for (let i = 0; i < rows; i++) {
      var row = $('<tr>').attr('id', 'row-'+i);
      $('#gameboard')[0].append(row[0]);
      for (let j = 0; j < columns; j++) {
        var cell = $('<td>').addClass('row-'+i+'-column-'+j);
        var clicked = [];
        var numMoves = 0;
        cell.on('click', function() {
          if (clicked.length === 0) {
            clicked.push(this);
            $(this).css('border','2px solid violet');
          } else if (clicked.length === 1) {
            clicked.push(this);
            $(this).css('border','2px solid violet');

            var first = clicked[0];
            var second = clicked[1];
            var firstSeparated = first.className.split('-');
            var secondSeparated = second.className.split('-');
            var rowFirst = Number(firstSeparated[1]);
            var columnFirst = Number(firstSeparated[3]);
            var rowSecond = Number(secondSeparated[1]);
            var columnSecond = Number(secondSeparated[3]);

            //check if adjacent elements
            if((rowSecond === rowFirst + 1 || rowSecond === rowFirst - 1 || rowFirst === rowSecond) && (columnSecond === columnFirst + 1 || columnSecond === columnFirst - 1 || columnFirst === columnSecond)) {
              //swap the background images of the 2 clicked elements
              var temp = first.style.backgroundImage;
              first.style.backgroundImage = second.style.backgroundImage;
              second.style.backgroundImage = temp;

              checkPair(first,second);
              proceed(numMoves);

            }
            console.log('2 clicked!');
            clicked = [];
            numMoves++;
            $('#number-moves').text('NUMBER OF MOVES: ' + numMoves);
          }
        });
        $('#row-'+i)[0].append(cell[0]);
      }
    }
    console.log($('#gameboard')[0]);
  }

  createBoard();
  populateBoard();
