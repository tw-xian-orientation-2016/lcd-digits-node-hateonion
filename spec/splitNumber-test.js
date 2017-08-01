'use strict'

var fixture = require('../src/splitNumber.js');

describe("splitNumber()", function() {
  describe("should return splited number array", function() {

    it("when input a 3bits number ", function() {
      let input = "910";
      let correctResult = ['9', '1', '0'];
      let result = fixture.splitNumber(input);

      expect(result).toEqual(correctResult);
    });
  });
});
