import { reverseArray } from './index';

it('should get reversed array', () => {
    const result = reverseArray([-1, -2, -3, -4, -5]);

    expect(result).toEqual([-5, -4, -3, -2, -1]);
});

it('should get null', () => {
    const result = reverseArray('');

    expect(result).toEqual(null);
});

it('should get square numbers array', () => {
    const result = reverseArray([1, 2, 3, 4, 5]);

    expect(result).toEqual([5, 4, 3, 2, 1]);
});