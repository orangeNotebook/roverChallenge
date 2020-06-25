//importing
const fs = require("fs");
const roverClass = require("./roverClass.js");
const instructionTranslator = require("./instructionTranslator.js");
const gridCreate = require("./grid.js");

module.exports = (gridX, gridY) => {
  //Declaring variabless
  var rover = [];
  var instructions = fs
    .readFileSync("../instructions/instructions.txt")
    .toString()
    .replace("\r", "")
    .split("\n"); //reading instructions from .txt and splitting it at each \n (also removing \r, these were found if two enters pressed between instructions)

  removeAloneExtraChar(instructions);

  var gridInstructions = instructions[0].replace("\r", "").split(" "); //splits the grid instructions up into individual indexes within an array and removes \r that arent standalone

  gridCreate(gridInstructions[0], gridInstructions[1], gridX, gridY);

  //Loops for the amount of instructions, discluding grid creation instructions, divided by 2 (rover spawn instructions, rover move instructions)
  for (var i = 1; i <= instructions.length - 1; i = i + 2) {
    rover[i] = createRoverAndMove(instructions, rover[i], i, gridX, gridY);

    if (rover[i].alive) {
      console.log(
        rover[i].xCoord + " " + rover[i].yCoord + " " + rover[i].rotation
      );
    } else {
      console.log(
        rover[i].xCoord +
          " " +
          rover[i].yCoord +
          " " +
          rover[i].rotation +
          " LOST"
      );
    }
  }
};

//goes through each character in the instructions and removes all stand alone \r
removeAloneExtraChar = (instructions) => {
  for (var a = 0; a <= instructions.length; a++) {
    var index = instructions.indexOf("\r");
    if (index > -1) {
      instructions.splice(index, 1);
    }
  }
};

createRoverAndMove = (instructions, rover, i, gridX, gridY) => {
  var startInstructions = instructions[i].replace("\r", "").split(" ");
  var moveInstructions = instructions[i + 1].replace("\r", "").split("");

  rover = new roverClass(
    startInstructions[2],
    startInstructions[0],
    startInstructions[1]
  );

  instructionTranslator(moveInstructions, rover, gridX, gridY); //calls instruction translator to translate movement instructions of rover i

  return rover;
};
