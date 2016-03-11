var splitNumber = require('../src/splitNumber.js');
var numberToLcdString = require('../src/numberToLcdString.js');
var printLcd = require('../src/printLcd.js');

function lcdPrint(input) {
  var splitedNumber = splitNumber.splitNumber(input);
  var lcdString = numberToLcdString.numberToLcdString(splitedNumber);
  printLcd.printLcd(lcdString);
}

exports.lcdPrint = lcdPrint;
