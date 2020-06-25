class roverClass {
  //rovers properties
  constructor(rot, x, y) {
    this.rotation = rot;
    this.xCoord = x;
    this.yCoord = y;
    this.alive = true;
  }

  //the left method checks which direction the rover is currently facing, and turns it 90` counter clockwise
  Left() {
    if (this.rotation == "N") {
      this.rotation = "W";
    } else if (this.rotation == "W") {
      this.rotation = "S";
    } else if (this.rotation == "S") {
      this.rotation = "E";
    } else if (this.rotation == "E") {
      this.rotation = "N";
    } else {
      console.log("left rotation broke");
    }
  }

  //the right method checks which direction the rover is currently facing, and turns it 90` clockwise
  Right() {
    if (this.rotation == "N") {
      this.rotation = "E";
    } else if (this.rotation == "E") {
      this.rotation = "S";
    } else if (this.rotation == "S") {
      this.rotation = "W";
    } else if (this.rotation == "W") {
      this.rotation = "N";
    } else {
      console.log("right rotation broke");
    }
  }

  //the forward method checks which direction the rover is facing and moves it towards that direction one space
  Forward() {
    if (this.rotation == "N") {
      this.yCoord++;
    } else if (this.rotation == "W") {
      this.xCoord--;
    } else if (this.rotation == "S") {
      this.yCoord--;
    } else if (this.rotation == "E") {
      this.xCoord++;
    } else {
      console.log("forwards broke");
    }
  }
}

module.exports = roverClass;
