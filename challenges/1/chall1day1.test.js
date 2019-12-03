'use strict'

let rocketFuel = require('./chall1day1.js')
let input = require('./list')
describe('Day 1 chall 1 tests (rocket fuel)', () => {
    it('Passes test case 12', () => {
        expect(rocketFuel.singleFuel(12)).toBe(2)
    });
    it('Passes test case 100756', () => {
        expect(rocketFuel.singleFuel(100756)).toBe(33583)
    });

    it('Can sum two different fuel requirements', () => {
        expect(rocketFuel.sumFuel([12,100756])).toBe(33585)
    });
    it('Can return the sum of all the fuel requirements', () => {
        expect(rocketFuel.sumFuel(input)).toBe(3317100)
    });
    it('Can return the sum of all the fuel requirements for part two', () => {
        expect(rocketFuel.recursiveSingleFuel(100756)).toBe(50346)
        // this is too low
    })
    it('Can return the sum of all the fuel requirements for part two', () => {
        expect(rocketFuel.recurseFuel(input)).toBe(4972784)
        // this is too low
    })

})