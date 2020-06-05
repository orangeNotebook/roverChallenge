const gridDetection = require('../src/gridDetection.js');

module.exports = (instructions, rover, gridX, gridY)=>{

    for(var i = 0; i < instructions.length; i++) {

        if(rover.alive == true){
          
            if(gridDetection(rover, gridX, gridY) == true){
                if(instructions[i] == "F"){
                    rover.Forward();
                }
            } 

            if(rover.alive == true){
                if(instructions[i] == "R"){
                        rover.Right();
                       
                }else if(instructions[i] == "L"){
                        rover.Left();
                       
                }else if(instructions[i] != "F"){
                        console.log("instruction " + i + " is unrecognised (" + instructions[i] + "), stopping rover");
                        return("Error, invalid instructions");
                }
            }
            
        }else if(rover.alive == false){
            return(true);
        }
    }

    return(false);

};