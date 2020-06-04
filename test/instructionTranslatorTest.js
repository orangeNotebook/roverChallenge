const { expect } = require('chai');
const roverClass = require('../src/roverClass.js');
const instructionTranslator = require('../src/instructionTranslator.js');
var arrayX = [true,true,true];
var arrayY = [true,true,true];
describe('Instruction Translator',()=>{

  describe('Translating movement instructions assuming bot starts at N 0 0',()=> {

    it('if given the instruction R, F, F should result in rovers direciton E rover xCoord 2 xCoord 0',()=> {
        var rover = new roverClass('N', 0, 0);
        var array = ['R', 'F', 'F'];
        instructionTranslator(array, rover, arrayX, arrayY);
        (expect(rover.xCoord).to.equal(2) && expect(rover.rotation).to.equal('E') && expect(rover.yCoord).to.equal(0))
    })

    it('if given the instruction R, R, F, L should result in rovers direciton E rover xCoord 0 yCoord -1',()=> {
      var rover = new roverClass('N', 0, 0);
      var array = ['R', 'R', 'F', 'L'];
      instructionTranslator(array, rover, arrayX, arrayY);
      (expect(rover.yCoord).to.equal(-1) && expect(rover.rotation).to.equal('E') && expect(rover.xCoord).to.equal(0))
     })

    it('if given the instruction L, L, L, F, F, R, F should result in rovers direciton S rover xCoord 2 yCoord -1',()=> {
      var rover = new roverClass('N', 0, 0);
      var array = ['L', 'L', 'L', 'F', 'F', 'R', 'F'];
      instructionTranslator(array, rover, arrayX, arrayY);
      (expect(rover.yCoord).to.equal(-1) && expect(rover.rotation).to.equal('S') && expect(rover.xCoord).to.equal(2))
    })

    it('if given the instruction L, F, R, F, F should result in rovers direciton N rover xCoord -1 yCoord 2',()=> {
      var rover = new roverClass('N', 0, 0);
      var array = ['L', 'F', 'R','F','F'];
      instructionTranslator(array, rover, arrayX, arrayY);
      (expect(rover.yCoord).to.equal(2) && expect(rover.rotation).to.equal('N') && expect(rover.xCoord).to.equal(-1))
    })

    it('if given false instructions (G H N B) it will print an error message and return an error',()=> {
      var rover = new roverClass('N', 0, 0);
      var array = ['G','H','N','B'];
      (expect(instructionTranslator(array, rover, arrayX, arrayY)).to.equal('Error, invalid instructions'))
    })
    
  })
})