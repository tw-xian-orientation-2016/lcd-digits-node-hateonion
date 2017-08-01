'use strict'

let numberToLcdString = require('../src/numberToLcdString');


describe("numberToLcdString()", function(){
  describe("it should return a lcd digit String array", function() {

    it("when input ['9', '1', '0'] ", function() {
      let input = ['9', '1', '0'];
      let correctResult = "._. ... ._.\n|_| ..| |.|\n..| ..| |_|";
      let result = numberToLcdString.numberToLcdString(input);

      expect(result).toEqual(correctResult);

    });
  });

});
