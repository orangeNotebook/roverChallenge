const fs = require('fs')
const roverClass = require('./roverClass.js');
const instructionTranslator = require('../src/instructionTranslator.js');
const gridCreate = require('../src/grid.js');

module.exports = (gridX, gridY)=>{
    
    var instructions = fs.readFileSync('../instructions/instructions.txt').toString().split("\n");
    var gridInstructions = '';
    var startInstructions = '';
    var moveInstructions = '';
    var arrayX = []
    var arrayY = []

    gridInstructions = instructions[0].replace('\r', "").split(" ");
    startInstructions = instructions[1].replace('\r', "").split(" ");
    moveInstructions = instructions[2].split("");

    // console.log(gridInstructions);
    // console.log(startInstructions);
    // console.log(moveInstructions);

    gridCreate(gridInstructions[0], gridInstructions[1], gridX, gridY);
    rover = new roverClass(startInstructions[2],startInstructions[0],startInstructions[1]);
    instructionTranslator(moveInstructions, rover);

    // console.log("After completing your instructions, your rover is facing " + rover.rotation + " and is at coordinates " + rover.xCoord + " " + rover.yCoord);

    console.log(rover.xCoord + " " + rover.yCoord + " " + rover.rotation);

    
}