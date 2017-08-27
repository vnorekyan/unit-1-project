//check for a pattern of 3 or more consecutive stones for each stone clicked - parameter passed in describes which stone that has been clicked is being processed - the first or the second
var checkStone = function(stone){
  var stoneSeparated = stone.className.split(' ')[0].split('-');
  var row = Number(stoneSeparated[1]);
  var column = Number(stoneSeparated[3]);
  var stoneImg = stone.style.backgroundImage;

  for (var i = 0; i < rows; i++){
    for (var j = 0; j < columns; j++){
      //mark the row and the column of one of the clicked cells as 'active' - this is used to make sure the right stones are highlighted and to clear the highligting later (see proceed.js)
      if ((i === row || j === column) && ($('.row-'+i+'-column-'+j).css('background-image') === stoneImg)){
        $('.row-'+i+'-column-'+j).addClass('active');
      }
    }
  }

  //traverse through each cell on gameboard
  for (var i = 0; i < rows; i++){
    for (var j = 0; j < columns; j++){
      //if the background images for the current cell, the cell 1 cell to the right and the cell 2 cells the right are the same as the background image for one of the clicked cells, mark these cells for deletion
      if(($('.row-'+i+'-column-'+j).css('background-image') === stoneImg)
      && ($('.row-'+i+'-column-'+(j+1)).css('background-image') === stoneImg)
      && ($('.row-'+i+'-column-'+(j+2)).css('background-image') === stoneImg)){
        $('.row-'+i+'-column-'+j).addClass('to-delete');
        $('.row-'+i+'-column-'+(j+1)).addClass('to-delete');
        $('.row-'+i+'-column-'+(j+2)).addClass('to-delete');
      }

      //if the background images for the current cell, the cell 1 cell up and the cell 2 cells up are the same as the background image for one of the clicked cells, mark these cells for deletion
      if(($('.row-'+i+'-column-'+j).css('background-image') === stoneImg)
      && ($('.row-'+(i+1)+'-column-'+j).css('background-image') === stoneImg)
      && ($('.row-'+(i+2)+'-column-'+j).css('background-image') === stoneImg)){
        $('.row-'+i+'-column-'+j).addClass('to-delete');
        $('.row-'+(i+1)+'-column-'+j).addClass('to-delete');
        $('.row-'+(i+2)+'-column-'+j).addClass('to-delete');
      }

    }
  }

}

//uses checkStone to check for both stones clicked
var checkPair = function(first, second) {

  first.className = first.className + " active";
  second.className = second.className + " active";

  checkStone(first);
  checkStone(second);

}
