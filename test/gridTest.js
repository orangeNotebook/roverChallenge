const { expect } = require('chai');
var gridCreate = require('../src/grid.js');

describe('Grid',()=>{

  describe('Grid Creation',()=> {
    it('should fill arrayX and arrayY with the size provided',()=> {
        var arrayX = [];
        var arrayY = [];
        gridCreate(5,7,arrayX,arrayY);
        (expect(arrayX.length).to.equal(5) && expect(arrayY.length).to.equal(7))
    })

    it('should fill arrayX and arrayY grid with true',()=> {
      var arrayX = [];
      var arrayY = [];
      gridCreate(5,7,arrayX,arrayY);

      for(var count = 0; count < 5; count ++){
       (expect(arrayX[count]).to.equal(true))};

      for(var count = 0; count < 7; count ++){
        (expect(arrayY[count]).to.equal(true))};

      expect(arrayX[10] && arrayY[10]).to.not.equal(true);
       
    })
  })
})
