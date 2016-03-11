'use strict'

function splitNumber(input) {
  let splitedNumber = [];

  for(let i = 0; i < input.length; i++) {
    splitedNumber.push(input[i]);
  }
  return splitedNumber;
}

exports.splitNumber = splitNumber;
