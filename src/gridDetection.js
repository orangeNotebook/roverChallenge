module.exports = (rover, gridX, gridY, skip)=>{
    
    if(gridX[rover.xCoord] != true || gridY[rover.yCoord] != true){

        if(gridX[rover.xCoord] == false || gridY[rover.yCoord] == false){
            return true;
    
        }else if(gridX[rover.xCoord] != false){
                rover.alive = false;
            if(rover.rotation == 'E'){
                gridX[rover.xCoord - 1] = false;

            }else if(rover.rotation == 'W'){
                gridX[rover.xCoord + 1] = false;

            }else if(rover.rotation == 'N'){
                gridY[rover.yCoord - 1] = false;

            }else if(rover.rotation == 'S'){
                gridY[rover.yCoord + 1] = false;
             
            }
        }
    }
}


