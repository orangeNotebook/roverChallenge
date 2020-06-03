const fs = require('fs');

var instructions = fs.readFileSync('instructionTest.txt').toString().split(" ");
for(var i = 0; i < instructions.length; i++) {
    console.log(instructions[i]);
}
