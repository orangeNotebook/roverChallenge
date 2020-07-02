module.exports = (rover, gridX, gridY) => {
  //Checks if rover is on a non grid position
  if (
    typeof gridX[rover.xCoord] == "undefined" ||
    typeof gridY[rover.yCoord] == "undefined"
  ) {
    rover.alive = false; //kills rover

    gridX[rover.xCoord] = false; //sets current rover grid X position to false
    gridY[rover.yCoord] = false; //sets current rover grid Y position to false

    //Checks which direction rover was facing when dead and removes 1 from said rotation coor to display last known position of rover
    if (rover.rotation == "E") {
      rover.xCoord--;
    } else if (rover.rotation == "W") {
      rover.xCoord++;
    } else if (rover.rotation == "N") {
      rover.yCoord--;
    } else if (rover.rotation == "S") {
      rover.yCoord++;
    }

    return false; //returns false, preventing 'F' instruction from running

    //Checks if rover is on a grid position
  } else if (gridX[rover.xCoord] == true && gridY[rover.yCoord] == true) {
    return true; //returns true, allowing 'F' instructions to run

    //Next few else ifs check if a previous rover died in the direction the rover is looking, if yes then returns false, preventing the 'F' instruction from running
  } else if (
    rover.rotation == "E" &&
    gridX[parseFloat(rover.xCoord) + 1] == false &&
    gridY[rover.yCoord] == false
  ) {
    return false;
  } else if (
    rover.rotation == "W" &&
    gridX[parseFloat(rover.xCoord) - 1] == false &&
    gridY[rover.yCoord] == false
  ) {
    return false;
  } else if (
    rover.rotation == "N" &&
    gridX[rover.xCoord] == false &&
    gridY[parseFloat(rover.yCoord) + 1] == false
  ) {
    return false;
  } else if (
    rover.rotation == "S" &&
    gridX[rover.xCoord] == false &&
    gridY[parseFloat(rover.yCoord) - 1] == false
  ) {
    return false;

    //If no previous rover death is detected, returns true (runs when standing on top of a dead rover corpse but not facing where it died), allowing the 'F' instruction to run
  } else {
    return true;
  }
};
