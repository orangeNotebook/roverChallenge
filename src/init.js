const fs = require('fs')
const roverClass = require('./roverClass.js');
const instructionTranslator = require('../src/instructionTranslator.js');
const gridCreate = require('../src/grid.js');


module.exports = (gridX, gridY)=>{
    
    var rover = []
    var instructions = fs.readFileSync('../instructions/instructions.txt').toString().replace('\r', "").split("\n");
    var gridInstructions = '';
    var startInstructions = '';
    var moveInstructions = '';
    

    for(var a = 0; a <= instructions.length; a++){
        var index = instructions.indexOf('\r');
        if (index > -1) {
            instructions.splice(index, 1);
        }
    }
 
    gridInstructions = instructions[0].replace('\r', "").split(" ");

    // console.log(gridInstructions);
    // console.log(startInstructions);
    // console.log(moveInstructions);

    gridCreate(gridInstructions[0], gridInstructions[1], gridX, gridY);

    // console.log("After completing your instructions, your rover is facing " + rover.rotation + " and is at coordinates " + rover.xCoord + " " + rover.yCoord);
   
    for(var i = 1; i <= ((instructions.length - 1)); i = i + 2){
       
        startInstructions = instructions[i].replace('\r', "").split(" ");
        moveInstructions = instructions[i + 1].replace('\r', "").split("");

        rover[i] = new roverClass(startInstructions[2],startInstructions[0],startInstructions[1]);
       
        instructionTranslator(moveInstructions, rover[i], gridX, gridY);
        
        if(rover[i].alive == false){
            console.log(rover[i].xCoord + " " + rover[i].yCoord + " " + rover[i].rotation + " LOST");
        }else{
            console.log(rover[i].xCoord + " " + rover[i].yCoord + " " + rover[i].rotation);
        }
        
    }
    
    

    
}