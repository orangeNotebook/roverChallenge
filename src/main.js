const fs = require('fs');
const roverClass = require('./roverClass.js');
const instructionTranslator = require('../src/instructionTranslator.js');
const gridCreate = require('../src/grid.js');

var instructions = fs.readFileSync('../instructions/instructions.txt').toString().split(" ");


var rover1 = roverClass

for(var i = 0; i < instructions.length; i++) {
    console.log(instructions[i]);
}