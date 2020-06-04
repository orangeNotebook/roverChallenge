const gridDetection = require('../src/gridDetection.js');

module.exports = (instructions, rover, gridX, gridY)=>{

    for(var i = 0; i < instructions.length; i++) {

        var skip = false;
        
        if(rover.alive == true){
            skip = gridDetection(rover, gridX, gridY, skip);
        }else if(rover.alive == false){
            return(true);
        }

        if(skip != true){

            if(instructions[i] == "F"){
                rover.Forward();
            }else if(instructions[i] == "R"){
                rover.Right();
            }else if(instructions[i] == "L"){
                rover.Left();
            }else{
                console.log("instruction " + i + " is unrecognised (" + instructions[i] + "), exiting program");
                return("Error, invalid instructions");
            }
        }
    }

    return(false);

};