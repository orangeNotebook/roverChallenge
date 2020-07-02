const { expect } = require("chai");
const roverClass = require("../src/roverClass.js");
const instructionTranslator = require("../src/instructionTranslator.js");
const gridCreate = require("../src/grid.js");

describe("Instruction Translator", () => {
  describe("Translating movement instructions assuming bot starts at N 0 0", () => {
    it("if given the instruction F, F, R should result in rovers direciton E rover xCoord 0 yCoord 2 alive true", () => {
      var rover = new roverClass("N", 0, 0);
      var array = ["F", "F", "R"];
      let grid = gridCreate(3, 3);
      instructionTranslator(array, rover, grid);
      expect(rover.xCoord).to.equal(0) &&
        expect(rover.rotation).to.equal("E") &&
        expect(rover.yCoord).to.equal(2) &&
        expect(rover.alive).to.equal(true);
    });

    it("if given the instruction R, F, F should result in rovers direciton E rover xCoord 2 yCoord 0 alive true", () => {
      var rover = new roverClass("N", 0, 0);
      var array = ["R", "F", "F"];
      let grid = gridCreate(3, 3);
      instructionTranslator(array, rover, grid);
      expect(rover.xCoord).to.equal(2) &&
        expect(rover.rotation).to.equal("E") &&
        expect(rover.yCoord).to.equal(0) &&
        expect(rover.alive).to.equal(true);
    });

    it("if given the instruction R, R, F, L should result in rovers direciton S rover xCoord 0 yCoord 0 alive false", () => {
      var rover = new roverClass("N", 0, 0);
      var array = ["R", "R", "F", "L"];
      let grid = gridCreate(3, 3);
      instructionTranslator(array, rover, grid);
      expect(rover.yCoord).to.equal(0) &&
        expect(rover.rotation).to.equal("S") &&
        expect(rover.xCoord).to.equal(0) &&
        expect(rover.alive).to.equal(false);
    });

    it("if given the instruction L, L, L, F, F, R, F, F should result in rovers direciton S rover xCoord 2 yCoord 0", () => {
      var rover = new roverClass("N", 0, 0);
      var array = ["L", "L", "L", "F", "F", "R", "F", "F"];
      let grid = gridCreate(3, 3);
      instructionTranslator(array, rover, grid);
      expect(rover.yCoord).to.equal(0) &&
        expect(rover.rotation).to.equal("S") &&
        expect(rover.xCoord).to.equal(2) &&
        expect(rover.alive).to.equal(false);
    });

    it("if given the instruction L, F, R, F, F should result in rovers direciton W rover xCoord 0 yCoord 0 rover alive false", () => {
      var rover = new roverClass("N", 0, 0);
      var array = ["L", "F", "R", "F", "F"];
      let grid = gridCreate(3, 3);
      instructionTranslator(array, rover, grid);
      expect(rover.yCoord).to.equal(0) &&
        expect(rover.rotation).to.equal("W") &&
        expect(rover.xCoord).to.equal(0) &&
        expect(rover.alive).to.equal(false);
    });

    it("if given false instructions (G H N B) it will print an error message and return an error", () => {
      var rover = new roverClass("N", 0, 0);
      var array = ["G", "H", "N", "B"];
      let grid = gridCreate(3, 3);
      expect(instructionTranslator(array, rover, grid)).to.equal(
        "Error, invalid instructions"
      );
    });
  });
});
