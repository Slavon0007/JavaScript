import { findDivCount } from './index';

it('should get zero', () => {
    const result = findDivCount(-5, 5, 2);

    expect(result).toEqual(5);
});

it('should get zero', () => {
    const result = findDivCount(-5, 0, 2);

    expect(result).toEqual(3);
});

it('should get 1', () => {
    const result = findDivCount(-5, 10, 5);

    expect(result).toEqual(4);
});