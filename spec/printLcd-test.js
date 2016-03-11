var fixture = require('../src/printLcd');

describe("printLcd()", function() {
  describe("it should print a LCD digts", function() {
    var input = "._. ... ._.\n|_| ..| |.|\n..| ..| |_|";
    var expectText ="._. ... ._.\n" +
      "|_| ..| |.|\n" +
        "..| ..| |_|";
        it('should print correct content', function() {

          spyOn(console, 'log');

          fixture.printLcd(input);
          expect(console.log).toHaveBeenCalledWith(expectText);
        });
  });
});
