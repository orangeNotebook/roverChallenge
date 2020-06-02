const { expect } = require('chai')
const Movement = require('../JS/main.js')

describe('Movement',()=>{
  it('Test',()=> {
    expect(1+1).to.equal(2);
  })

  it('should move one position',()=> {
   expect(testAttempt()).to.equal('Hello World!');
  })
      
      
})