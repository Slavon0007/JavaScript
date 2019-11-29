import { getMinSquaredNumber } from './getMinSquaredNumber';

it('should get min sqared numbers of arr', () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

    expect(result).toEqual(4);
});

it('should get null if array is void', () => {
    const result = getMinSquaredNumber([]);

    expect(result).toEqual(null);
});

it('should get null from string', () => {
    const result = getMinSquaredNumber('string');

    expect(result).toEqual(null);
});