'use strict';

let splitNumber = require('../src/splitNumber.js');
let numberToLcdString = require('../src/numberToLcdString.js');
let printLcd = require('../src/printLcd.js');

function lcdPrint(input) {
  let splitedNumber = splitNumber.splitNumber(input);
  let lcdString = numberToLcdString.numberToLcdString(splitedNumber);
  printLcd.printLcd(lcdString);
}

exports.lcdPrint = lcdPrint;
