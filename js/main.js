var rows = 6;
var columns = 8;
//number of moves left before user runs out of moves
var movesLeft = 15;

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
        //elements clicked
        var clicked = [];
        //number of moves used
        var numMoves = 0;
        cell.on('click', function() {
          if (clicked.length === 0) {
            clicked.push(this);
            //highlight clicked elements
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
            if (rowFirst === rowSecond && columnFirst === columnSecond) {
              //remove highlighting
              first.style.border = '2px solid lavender';
              second.style.border = '2px solid lavender';
            } else if ((rowSecond === rowFirst + 1 || rowSecond === rowFirst - 1 || rowFirst === rowSecond) && (columnSecond === columnFirst + 1 || columnSecond === columnFirst - 1 || columnFirst === columnSecond)) {
              //swap the background images of the 2 clicked elements
              var temp = first.style.backgroundImage;
              first.style.backgroundImage = second.style.backgroundImage;
              second.style.backgroundImage = temp;

              //check if correct pattern is formed
              checkPair(first,second);
              //logic for scorekeeping and moving on to next level is in the proceed method
              proceed(numMoves);
              //update number of moves used and number of moves left
              numMoves++;
              movesLeft--;

            } else {
              //remove highlighting
              first.style.border = '2px solid lavender';
              second.style.border = '2px solid lavender';
            }

            console.log('2 clicked!');
            clicked = [];

            $('#number-moves').text('NUMBER OF MOVES: ' + numMoves);
            $('#moves-left').text('MOVES LEFT: ' + movesLeft);
          }
        });
        $('#row-'+i)[0].append(cell[0]);
      }
    }
    console.log($('#gameboard')[0]);
  }

  createBoard();
  populateBoard();
