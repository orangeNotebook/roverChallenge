//importing
const gridDetection = require("./gridDetection.js");

module.exports = (instructions, rover, gridX, gridY) => {
  //loops the amount of times as instructions in array
  for (var i = 0; i < instructions.length; i++) {
    //checks if rover is alive, if yea performs movement instructions
    if (rover.alive == true) {
      //checks if the rover is looking towards the corpse of a previous rover, if yes skips the 'F' instruction
      if (gridDetection(rover, gridX, gridY) == true) {
        //checks if rover instruction is 'F'
        if (instructions[i] == "F") {
          rover.Forward(); //moves the rover forward one space in the direction it's facing
        }
      }

      //double checks if rover is alive (if dies in forward instruction, we don't want this to execute so we have to re-check)
      if (rover.alive == true) {
        //checks what instruction was executed ('R', 'L')
        if (instructions[i] == "R") {
          rover.Right(); //rotates rover 90` to the right
        } else if (instructions[i] == "L") {
          rover.Left(); //rotates rover 90` to the left

          //if the instruciton was anything else, apart from 'F', it returns an error and prints which instruction crashed the rover
        } else if (instructions[i] != "F") {
          console.log(
            "instruction " +
              i +
              " is unrecognised (" +
              instructions[i] +
              "), stopping rover"
          ); //prints failing instruction to console
          return "Error, invalid instructions"; //returns error
        }
      }
      //Checks if the rover has died
    } else if (rover.alive == false) {
      return true; //returns true, this is just done to exit out of the loop and prevent extra instructions from running
    }
  }
};
