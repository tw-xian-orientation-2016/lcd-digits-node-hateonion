'use strict';
let lcdPrint = require('../src/main.js')

describe("integration test", function() {
  describe("it should print lcd String", function() {
    let input = '910';
    let expectText ="._. ... ._.\n" +
      "|_| ..| |.|\n" +
        "..| ..| |_|";
    it("when input 910", function() {

          spyOn(console, 'log');

          lcdPrint.lcdPrint(input);
          expect(console.log).toHaveBeenCalledWith(expectText);
    });
  });

});
