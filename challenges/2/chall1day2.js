'use strict';

const intCode = (codes) => {
let pointer = 0;
    // switch(codes[pointer]){
    //     case 99: break
    //     case 1: codes[codes[pointer + 3]] = codes[codes[pointer +1]]  + codes[codes[pointer + 2]]
    //     case 2: codes[codes[pointer + 3]] = codes[codes[pointer +1]]  * codes[codes[pointer + 2]]
    // }
    while(pointer < codes.length){
        // check pointer directly will be either 1,2 or 99
        if(codes[pointer] === 99){
            break
        }
        else if(codes[pointer] === 1){
            codes[codes[pointer + 3]] = codes[codes[pointer +1]]  + codes[codes[pointer + 2]]
        }
        else if(codes[pointer]=== 2){
            codes[codes[pointer + 3]] = codes[codes[pointer +1]]  * codes[codes[pointer + 2]]
        }
        pointer += 4
    }
return {zero:codes[0], codes}
}

module.exports = intCode