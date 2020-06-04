const { expect } = require('chai');
const roverClass = require('../src/roverClass.js');

describe('roverClass',()=>{

  describe('roverClass Constructor',()=> {
    it('should be a constructor for the roverClass class',()=> {
        expect(new roverClass('N', 0, 0)).to.be.an.instanceOf(roverClass)
    })
    
    describe('roverClass Properties',() => {
      it('should have an x coordinate property',()=>{
        expect(new roverClass('N', 0, 0)).to.have.property('xCoord')
      })
      it('should have a y coordinate property',()=>{
        expect(new roverClass('N', 0, 0)).to.have.property('yCoord')
      })
      it('should have a rotation property',()=>{
        expect(new roverClass('N', 0, 0)).to.have.property('rotation')
      })
      it('should have an alive property',()=>{
        expect(new roverClass('N', 0, 0)).to.have.property('alive')
      })
  })
})

  describe('roverClass Methods (assuming starting rotation is N, and pos is 0 0',()=> {
    describe('Rotating right',()=> {
      it('should face East if right() is executed once',()=> {
        var rover = new roverClass('N', 0, 0)
        rover.Right();
          expect(rover.rotation).to.equal("E")
      })
      it('should face South if right() is executed twice',()=> {
        var rover = new roverClass('N', 0, 0)
        rover.Right();
        rover.Right();
          expect(rover.rotation).to.equal("S")
      })
      it('should face West if right() is executed three times',()=> {
        var rover = new roverClass('N', 0, 0)
        rover.Right();
        rover.Right();
        rover.Right();
          expect(rover.rotation).to.equal("W")
      })
    })

    describe('Rotating left',()=> {
      it('should face West if left() is executed once',()=> {
        var rover = new roverClass('N', 0, 0)
        rover.Left();
          expect(rover.rotation).to.equal("W")
      })
      it('should face South if left() is executed twice',()=> {
        var rover = new roverClass('N', 0, 0)
        rover.Left();
        rover.Left();
          expect(rover.rotation).to.equal("S")
      })
      it('should face East if Left() is executed three times',()=> {
        var rover = new roverClass('N', 0, 0)
        rover.Left();
        rover.Left();
        rover.Left();
          expect(rover.rotation).to.equal("E")
      })
    })

    describe('Movement',()=> {

      it('should move one North (ypos = 1) if executed first',()=> {
        var rover = new roverClass('N', 0, 0)
        rover.Forward();
          expect(rover.yCoord).to.equal(1)
      })

      describe('Movement after Right()',()=> {
        it('should move one East (xpos = 1) if executed after a Right()',()=> {
          var rover = new roverClass('N', 0, 0)
          rover.Right();
          rover.Forward();
          expect(rover.xCoord).to.equal(1)
        })
        it('should move one South (ypos = -1) if executed after two Right()',()=> {
          var rover = new roverClass('N', 0, 0)
          rover.Right();
          rover.Right();
          rover.Forward();
          expect(rover.yCoord).to.equal(-1)
        })
        it('should move one West (xpos = -1) if executed after three Right()',()=> {
          var rover = new roverClass('N', 0, 0)
          rover.Right();
          rover.Right();
          rover.Right();
          rover.Forward();
          expect(rover.xCoord).to.equal(-1)
        })
      })

      describe('Movement after Left()',()=> {
        it('should move one West (xpos = -1) if executed after a Left()',()=> {
          var rover = new roverClass('N', 0, 0)
          rover.Left();
          rover.Forward();
          expect(rover.xCoord).to.equal(-1)
        })
        it('should move one South (ypos = -1) if executed after two Left()',()=> {
          var rover = new roverClass('N', 0, 0)
          rover.Left();
          rover.Left();
          rover.Forward();
          expect(rover.yCoord).to.equal(-1)
        })
        it('should move one East (xpos = 1) if executed after three Left()',()=> {
          var rover = new roverClass('N', 0, 0)
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