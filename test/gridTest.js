const { expect } = require("chai");
const gridCreate = require("../src/grid.js");

describe("Grid", () => {
  describe("Grid Creation", () => {
    it("should fill grid with the size provided + 1", () => {
      var grid = gridCreate(5, 7);
      expect(grid.length).to.equal(6) && expect(grid[0].length).to.equal(8);
    });

    it("should fill grid with true", () => {
      var grid = gridCreate(5, 7);

      for (var countY = 0; countY < 8; countY++) {
        for (var countX = 0; countX < 6; countX++) {
          expect(grid[countX][countY]).to.equal(true);
        }
      }

      expect(grid[10]).to.not.equal(true);
    });
  });
});
