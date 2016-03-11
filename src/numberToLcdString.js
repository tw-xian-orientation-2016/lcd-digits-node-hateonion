'use strict';
function loadMapping() {
  return {"0" : {"firstLine": "._.", "secondLine": "|.|", "thirdLine" : "|_|"},
    "1" : {"firstLine": "...", "secondLine": "..|", "thirdLine" : "..|"},
    "2" : {"firstLine": "._.", "secondLine": "._|", "thirdLine" : "|_."},
    "3" : {"firstLine": "._.", "secondLine": "._|", "thirdLine" : "._|"},
    "4" : {"firstLine": "...", "secondLine": "|_|", "thirdLine" : "..|"},
    "5" : {"firstLine": "._.", "secondLine": "|_.", "thirdLine" : "._|"},
    "6" : {"firstLine": "._.", "secondLine": "|_.", "thirdLine" : "|_|"},
    "7" : {"firstLine": "._.", "secondLine": "..|", "thirdLine" : "..|"},
    "8" : {"firstLine": "._.", "secondLine": "|_|", "thirdLine" : "|_|"},
    "9" : {"firstLine": "._.", "secondLine": "|_|", "thirdLine" : "..|"}};
}

function numberToLcdString (splitedNumberArr) {
  let lcdStrFirstLine = "";
  let lcdStrSecondLine = "";
  let lcdStrThirdLine = "";
  let lcdStr = "";
  let mapping = loadMapping();

  splitedNumberArr.forEach(function (splitedNumber, index) {
    if(index !== 2) {
      lcdStrFirstLine += mapping[splitedNumber].firstLine + ' ';
      lcdStrSecondLine+= mapping[splitedNumber].secondLine + ' ';
      lcdStrThirdLine += mapping[splitedNumber].thirdLine + ' ';
    } else {
      lcdStrFirstLine += mapping[splitedNumber].firstLine + '\n';
      lcdStrSecondLine+= mapping[splitedNumber].secondLine + '\n';
      lcdStrThirdLine += mapping[splitedNumber].thirdLine;
    }
  });
  lcdStr = lcdStrFirstLine + lcdStrSecondLine + lcdStrThirdLine;
  return lcdStr;
}

exports.numberToLcdString = numberToLcdString;
exports.loadMapping = loadMapping;
