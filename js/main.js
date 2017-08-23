(function() {

  var populateBoard = function() {

    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 13; j++) {
        var randNum = Math.floor(Math.random() * 6) + 1;

        switch(randNum) {
          case 1:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(file:///Users/jzv795/Documents/CODA/unit-1-project/images/blue-diamond.jpeg)');
            break;
          case 2:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(file:///Users/jzv795/Documents/CODA/unit-1-project/images/green-diamond.jpg)');
            break;
          case 3:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(file:///Users/jzv795/Documents/CODA/unit-1-project/images/pink-sapphire.jpg)');
            break;
          case 4:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(file:///Users/jzv795/Documents/CODA/unit-1-project/images/blue-gem.jpg)');
            break;
          case 5:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(file:///Users/jzv795/Documents/CODA/unit-1-project/images/rubellite-tourmaline.jpg)');
            break;
          case 6:
            $('.row-'+i+'-column-'+j).css('background-image', 'url(file:///Users/jzv795/Documents/CODA/unit-1-project/images/pink-tourmaline.jpg)');
            break;
        }
      }
    }
  }

  var createBoard = function() {
    for (let i = 0; i < 6; i++) {
      var row = $('<tr>').attr('id', 'row-'+i);
      $('#gameboard')[0].append(row[0]);
      for (let j = 0; j < 13; j++) {
        var cell = $('<td>').addClass('row-'+i+'-column-'+j);
        var clicked = [];
        cell.on('click', function() {
          //console.log($(this).attr('class'));
          if (clicked.length === 0) {
            clicked.push(this);
            //$(this).css('border','2px solid violet');
          } else if (clicked.length === 1) {
            clicked.push(this);
            //$(this).css('border','2px solid violet');

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

              var toDelete = [];
              var step = 1;

              for (var i = 0; i < 6; i++) {

                  if( ($('.row-'+i+'-column-'+columnFirst).css('background-image') === first.style.backgroundImage)
                      && ( ($('.row-'+(i+1)+'-column-'+columnFirst).css('background-image') === first.style.backgroundImage) || ($('.row-'+(i-1)+'-column-'+columnFirst).css('background-image') === first.style.backgroundImage) )
                      // && ( ($('.row-'+(i+2)+'-column-'+columnFirst).css('background-image') === first.style.backgroundImage) || ($('.row-'+(i-2)+'-column-'+columnFirst).css('background-image') === first.style.backgroundImage) )
                     ) {
                        $('.row-'+i+'-column-'+columnFirst).addClass('active-1');
                      }

              }

              for (var i = 0; i < 6; i++) {

                  if( ($('.row-'+i+'-column-'+columnSecond).css('background-image') === second.style.backgroundImage)
                      && ( ($('.row-'+(i+1)+'-column-'+columnSecond).css('background-image') === second.style.backgroundImage) || ($('.row-'+(i-1)+'-column-'+columnSecond).css('background-image') === second.style.backgroundImage) )
                      // && ( ($('.row-'+(i+2)+'-column-'+columnSecond).css('background-image') === second.style.backgroundImage) || ($('.row-'+(i-2)+'-column-'+columnSecond).css('background-image') === second.style.backgroundImage) )
                     ) {
                        $('.row-'+i+'-column-'+columnSecond).addClass('active-2');
                      }

              }


                for (var j = 0; j < 13; j++) {
                  if( ($('.row-'+rowFirst+'-column-'+j).css('background-image') === first.style.backgroundImage)
                      && ( ($('.row-'+rowFirst+'-column-'+(j+1)).css('background-image') === first.style.backgroundImage) || ($('.row-'+rowFirst+'-column-'+(j-1)).css('background-image') === first.style.backgroundImage) )
                      // && ( ($('.row-'+rowFirst+'-column-'+(j+2)).css('background-image') === first.style.backgroundImage) || ($('.row-'+rowFirst+'-column-'+(j-2)).css('background-image') === first.style.backgroundImage) )
                    ) {
                        $('.row-'+rowFirst+'-column-'+j).addClass('active-1');
                      }

              }


                for (var j = 0; j < 13; j++) {
                  if( ($('.row-'+rowSecond+'-column-'+j).css('background-image') === second.style.backgroundImage)
                      && ( ($('.row-'+rowSecond+'-column-'+(j+1)).css('background-image') === second.style.backgroundImage) || ($('.row-'+rowSecond+'-column-'+(j-1)).css('background-image') === second.style.backgroundImage) )
                      // && ( ($('.row-'+rowSecond+'-column-'+(j+2)).css('background-image') === second.style.backgroundImage) || ($('.row-'+rowSecond+'-column-'+(j-2)).css('background-image') === second.style.backgroundImage) )
                    ) {
                        $('.row-'+rowSecond+'-column-'+j).addClass('active-2');
                      }

              }


            //   while (step !== 0){
            //
            //   for (var i = 0; i < 6; i++) {
            //     for (var j = 0; j < 13; j++) {
            //         if( (i === rowFirst + step || i === rowFirst - step || i === rowFirst) || (j === columnFirst + step || j === columnFirst - step || j === columnFirst) ){
            //           if($('.row-'+i+'-column-'+j).css('background-image') === first.style.backgroundImage){
            //             $('.row-'+i+'-column-'+j).addClass('active');
            //             $('.active').css('border','2px solid violet');
            //             console.log('incremented step: ' + step);
            //             console.log('step while loop');
            //
            //             if($('.row-'+(i+1)+'-column-'+j).css('background-image') === first.style.backgroundImage || $('.row-'+(i-1)+'-column-'+j).css('background-image') === first.style.backgroundImage) {
            //               step++;
            //             // if (step > 1){
            //             //   toDelete.push($('.row-'+i+'-column-'+j).attr('class'));
            //             //   $('.row-'+i+'-column-'+j).css('border','2px solid violet');
            //             // }
            //
            //           } else {
            //             step = 0;
            //           }
            //
            //
            //
            //       }
            //     }
            //     }
            //   }
            // }
              console.log('todelete ' + toDelete);

            }

            //first.style.border = '2px solid lavender';
            //second.style.border = '2px solid lavender';
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
