'use strict';

const singleFuel = (mass) => {
    // take its mass, divide by three, round down, and subtract 2.
    return Math.floor(mass / 3) -2
}

const recursiveSingleFuel = (mass) => {
    let totalFuel = 0;
    while(mass > 0){
        let extraFuel = singleFuel(mass)
        if(extraFuel > 0){totalFuel += extraFuel}
        mass = extraFuel;
    }
    return totalFuel
}
const sumFuel = (arrOfMass) => arrOfMass.reduce((acc, val) => acc += singleFuel(val), 0)
const recurseFuel = (arrOfMass) => arrOfMass.reduce((acc, val) => acc += recursiveSingleFuel(val), 0)


module.exports = {singleFuel, sumFuel,recursiveSingleFuel,recurseFuel}