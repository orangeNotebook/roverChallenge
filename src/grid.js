module.exports = (x, y, arrX, arrY) => {
  for (var count = 0; count <= x; count++) {
    arrX[count] = true; //fills x grid with true up until you reach the provided limit
  }

  for (var count = 0; count <= y; count++) {
    arrY[count] = true; //fills y grid with true up until you reach the provided limit
  }
};
