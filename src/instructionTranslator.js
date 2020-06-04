module.exports = (instructions, rover)=>{

    for(var i = 0; i < instructions.length; i++) {
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

};