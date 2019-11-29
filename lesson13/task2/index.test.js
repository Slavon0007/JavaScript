import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('shoud get square numbers', () => {
    const result = getSquaredArray([1, 2, 3]);
    expect(result).toEqual([1, 4, 9]);
});

it('shoud keep odd numbers only', () => {
    const result = getOddNumbers([1, 2, 3, 4, 5]);

    expect(result).toEqual([1, 3, 5]);
});

it('shoud get sum of numbers', () => {
    const result = getSum(8, 4);

    expect(result).toEqual(12);
});