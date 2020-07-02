module.exports = (x, y) => {
  var marsGrid = create2DArray(x);
  var gridX = [];

  // for (var k = 0; k <= x; k++) {
  //   gridX[k] = true;
  // }

  for (var k = 0; k <= y; k++) {
    for (var j = 0; j <= x; j++) {
      marsGrid[j][k] = true; //fills grid with true up until you reach the provided limit
    }
  }
  return marsGrid;
};

function create2DArray(r) {
  var array = [];

  for (var i = 0; i <= r; i++) {
    array[i] = [];
  }

  return array;
}
