'use strict';

const intCode = (codes) => {
  let pointer = 0;

  while (pointer < codes.length) {
    switch (codes[pointer]) {
      case 99:
        return { zero: codes[0], codes }
      case 1:
        codes[codes[pointer + 3]] = codes[codes[pointer + 1]] + codes[codes[pointer + 2]]
        break
      case 2:
        codes[codes[pointer + 3]] = codes[codes[pointer + 1]] * codes[codes[pointer + 2]]
        break
    }
    pointer += 4
  }
  return { zero: codes[0], codes }
}

module.exports = intCode