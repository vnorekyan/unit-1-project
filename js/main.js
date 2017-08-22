(function() {

  var populateCell = function(i,j) {
    var randNum = Math.floor(Math.random() * 6) + 1;
    console.log(randNum);

    switch(randNum) {
      case 1:
        $('.row-'+i+'-column-'+j).css('background-image', 'url(./blue-diamond.jpeg)');
        break;
      case 2:
        $('.row-'+i+'-column-'+j).css('background-image', 'url(./green-diamond.jpg)');
        break;
      case 3:
        $('.row-'+i+'-column-'+j).css('background-image', 'url(./pink-sapphire.jpg)');
        break;
      case 4:
        $('.row-'+i+'-column-'+j).css('background-image', 'url(./blue-gem.jpg)');
        break;
      case 5:
        $('.row-'+i+'-column-'+j).css('background-image', 'url(./rubellite-tourmaline.jpg)');
        break;
      case 6:
        $('.row-'+i+'-column-'+j).css('background-image', 'url(./pink-tourmaline.jpg)');
        break;
    }
  }

  var createBoard = function() {
    for (let i = 0; i < 9; i++) {
      var row = $('<tr>').attr('id', 'row-'+i);
      $('#gameboard')[0].append(row[0]);
      for (let j = 0; j < 9; j++) {
        var column = $('<td>').addClass('row-'+i+'-column-'+j);
        $('#row-'+i)[0].append(column[0]);
        populateCell(i,j);
      }
    }
    console.log($('#gameboard')[0]);
  }

  createBoard();
})();
