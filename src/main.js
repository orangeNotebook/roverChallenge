const fs = require('fs');
const roverClass = require('./roverClass.js');
const instructionTranslator = require('../src/instructionTranslator.js');
const gridCreate = require('../src/grid.js');
const init = require('../src/init.js');


var gridX = [];
var gridY = [];

init(gridX, gridY);