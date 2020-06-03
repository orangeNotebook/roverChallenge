const fs = require('fs')

class roverClass{

    constructor(){
        this.rotation = "N"
        this.xCoord = 0;
        this.yCoord =0;
        this.alive = true;
    };

    Left(){
        if(this.rotation == "N"){
            this.rotation = "W";
        }else if(this.rotation == "W"){
            this.rotation = "S";
        }else if(this.rotation == "S"){
            this.rotation = "E";
        }else if(this.rotation == "E"){
            this.rotation = "N";
        }else{
            console.log("left rotation broke");
        };
    };

    Right(){
        if(this.rotation == "N"){
            this.rotation = "E";
        }else if(this.rotation == "E"){
            this.rotation = "S";
        }else if(this.rotation == "S"){
            this.rotation = "W";
        }else if(this.rotation == "W"){
            this.rotation = "N";
        }else{
            console.log("right rotation broke");
        };
    };

    Forward(){
        if(this.rotation == "N"){
            this.yCoord++;
        }else if(this.rotation == "W"){
            this.xCoord--;
        }else if(this.rotation == "S"){
            this.yCoord--;
        }else if(this.rotation == "E"){
            this.xCoord++;
        }else{
            console.log("forwards broke");
        };
    };
};

module.exports = roverClass