const { expect } = require('chai');
const Rover = require('../src/rover.js');

describe('Rover',()=>{

  describe('Rover Constructor',()=> {
    it('should be a constructor for the Rover class',()=> {
        expect(new Rover()).to.be.an.instanceOf(Rover)
    })
    
    describe('Rover Properties',() => {
      it('should have an x coordinate property',()=>{
        expect(new Rover()).to.have.property('xCoord')
      })
      it('should have a y coordinate property',()=>{
        expect(new Rover()).to.have.property('yCoord')
      })
      it('should have a rotation property',()=>{
        expect(new Rover()).to.have.property('rotation')
      })
      it('should have an alive property',()=>{
        expect(new Rover()).to.have.property('alive')
      })
  })
})

  describe('Rover Methods',()=> {
    describe('Rotating right',()=> {
      it('should face East if right() is executed once',()=> {
        var rover = new Rover()
        rover.Right();
          expect(rover.rotation).to.equal("E")
      })
      it('should face South if right() is executed twice',()=> {
        var rover = new Rover()
        rover.Right();
        rover.Right();
          expect(rover.rotation).to.equal("S")
      })
      it('should face West if right() is executed three times',()=> {
        var rover = new Rover()
        rover.Right();
        rover.Right();
        rover.Right();
          expect(rover.rotation).to.equal("W")
      })
    })

    describe('Rotating left',()=> {
      it('should face West if left() is executed once',()=> {
        var rover = new Rover()
        rover.Left();
          expect(rover.rotation).to.equal("W")
      })
      it('should face South if left() is executed twice',()=> {
        var rover = new Rover()
        rover.Left();
        rover.Left();
          expect(rover.rotation).to.equal("S")
      })
      it('should face East if Left() is executed three times',()=> {
        var rover = new Rover()
        rover.Left();
        rover.Left();
        rover.Left();
          expect(rover.rotation).to.equal("E")
      })
    })

    describe('Movement',()=> {

      it('should move one North (ypos = 1) if executed first',()=> {
        var rover = new Rover()
        rover.Forward();
          expect(rover.yCoord).to.equal(1)
      })

      describe('Movement after Right()',()=> {
        it('should move one East (xpos = 1) if executed after a Right()',()=> {
          var rover = new Rover()
          rover.Right();
          rover.Forward();
          expect(rover.xCoord).to.equal(1)
        })
        it('should move one South (ypos = -1) if executed after two Right()',()=> {
          var rover = new Rover()
          rover.Right();
          rover.Right();
          rover.Forward();
          expect(rover.yCoord).to.equal(-1)
        })
        it('should move one West (xpos = -1) if executed after three Right()',()=> {
          var rover = new Rover()
          rover.Right();
          rover.Right();
          rover.Right();
          rover.Forward();
          expect(rover.xCoord).to.equal(-1)
        })
      })

      describe('Movement after Left()',()=> {
        it('should move one West (xpos = -1) if executed after a Left()',()=> {
          var rover = new Rover()
          rover.Left();
          rover.Forward();
          expect(rover.xCoord).to.equal(-1)
        })
        it('should move one South (ypos = -1) if executed after two Left()',()=> {
          var rover = new Rover()
          rover.Left();
          rover.Left();
          rover.Forward();
          expect(rover.yCoord).to.equal(-1)
        })
        it('should move one East (xpos = 1) if executed after three Left()',()=> {
          var rover = new Rover()
          rover.Left();
          rover.Left();
          rover.Left();
          rover.Forward();
          expect(rover.xCoord).to.equal(1)
        })
      })
    })
  })
  
})

  
      
      
