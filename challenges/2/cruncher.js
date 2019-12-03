'use strict';

const intCode = require('./chall1day2.js');
const input = require('./input.js');


// input[1] = 0-99
// input[2] = 0-99

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    // create a copy of the array
    let tempInput = [...input];
    // change first value
    tempInput[1] = i;
    // change second value
    tempInput[2] = j;
    // run program
    if(intCode(tempInput).zero == 19690720){
      console.log({i,j, zero:tempInput[0]})
    }
    // check zero value
    // let zeroValue = 
  }
}