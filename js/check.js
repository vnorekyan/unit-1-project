//check individual stone - pass in 'first' or 'second'
var checkStone = function(stone){
  var stoneSeparated = stone.className.split(' ')[0].split('-');
  var row = Number(stoneSeparated[1]);
  var column = Number(stoneSeparated[3]);
  var stoneImg = stone.style.backgroundImage;

  for (var i = 0; i < rows; i++){
    for (var j = 0; j < columns; j++){
      if ((i === row || j === column) && ($('.row-'+i+'-column-'+j).css('background-image') === stoneImg)){
        $('.row-'+i+'-column-'+j).addClass('active');
      }
    }
  }

  for (var i = 0; i < rows; i++){
    for (var j = 0; j < columns; j++){
      if(($('.row-'+i+'-column-'+j).css('background-image') === stoneImg)
      && ($('.row-'+i+'-column-'+(j+1)).css('background-image') === stoneImg)
      && ($('.row-'+i+'-column-'+(j+2)).css('background-image') === stoneImg)){
        $('.row-'+i+'-column-'+j).addClass('to-delete');
        $('.row-'+i+'-column-'+(j+1)).addClass('to-delete');
        $('.row-'+i+'-column-'+(j+2)).addClass('to-delete');
      }

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

var checkPair = function(first, second) {

  first.className = first.className + " active";
  second.className = second.className + " active"; //change active-1 to active later

  checkStone(first);
  checkStone(second);

}
