'use strict';

const intCode = require('./chall1day2.js');
const input = require('./input.js')

describe('day 2 intCode tests', () => {
    it('passes testcase 1,0,0,0,99', () => {
        expect(intCode([1,0,0,0,99]).codes).toEqual([2,0,0,0,99])
    });
    it('passes testcase 2,4,4,5,99,0', () => {
        expect(intCode([2,4,4,5,99,0]).codes).toEqual([2,4,4,5,99,9801])
    });
    it('passes testcase 1,1,1,4,99,5,6,0,99', () => {
        expect(intCode([1,1,1,4,99,5,6,0,99]).codes).toEqual([30,1,1,4,2,5,6,0,99])
    });
    it('Handles the actual solution', () => {
       input[1] = 12;
       input[2] = 2
        expect(intCode(input).zero).toEqual(3306701)
    })
})


/*
1,1,1,4,99,5,6,0,99
*/