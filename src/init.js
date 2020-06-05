//importing
const fs = require('fs')
const roverClass = require('./roverClass.js');
const instructionTranslator = require('../src/instructionTranslator.js');
const gridCreate = require('../src/grid.js');


module.exports = (gridX, gridY)=>{
    
    //Declaring variables
    var rover = []  //array for rovers
    var instructions = fs.readFileSync('../instructions/instructions.txt').toString().replace('\r', "").split("\n");    //reading instructions from .txt and splitting it at each \n (also removing \r, these were found if two enters pressed between instructions)
    var gridInstructions = '';  //empty string for grid creation instructions
    var startInstructions = ''; //empty string for rover starting instructions (start coordinates / rotation)
    var moveInstructions = '';  //empty grid for rover movement instructions
    
    //goes through each character in the instructions and removes all stand alone \r
    for(var a = 0; a <= instructions.length; a++){
        var index = instructions.indexOf('\r');
        if (index > -1) {
            instructions.splice(index, 1);
        }
    }
 
    gridInstructions = instructions[0].replace('\r', "").split(" ");    //splits the grid instructions up into individual indexes within an array and removes \r that arent standalone

    gridCreate(gridInstructions[0], gridInstructions[1], gridX, gridY); //calls the gridCreate function, creating a grid with the provided grid size
   
    //Loops for the amount of instructions, discluding grid creation instructions, divided by 2 (rover spawn instructions, rover move instructions)
    for(var i = 1; i <= ((instructions.length - 1)); i = i + 2){
       
        startInstructions = instructions[i].replace('\r', "").split(" ");   //splits the i rovers start instructions into an array and removes \r that arent standalone
        moveInstructions = instructions[i + 1].replace('\r', "").split(""); //splits the i rovers move instructions into an array and removes \r that arent standalone

        rover[i] = new roverClass(startInstructions[2],startInstructions[0],startInstructions[1]);  //creates a new rover class for rover i, passing in the start coordinates and rotation
       
        instructionTranslator(moveInstructions, rover[i], gridX, gridY);    //calls instruction translator to translate movement instructions of rover i
        
        //checks if the rover is dead, if yes then outputs 'LOST' at the end of rovers position and rotation
        if(rover[i].alive == false){
            console.log(rover[i].xCoord + " " + rover[i].yCoord + " " + rover[i].rotation + " LOST");   //outputs rovers position and rotation, along with 'Lost' message
        }else{
            console.log(rover[i].xCoord + " " + rover[i].yCoord + " " + rover[i].rotation); //outputs rovers position and rotation, without 'Lost' message (Rover is alive)
        }
    }
}