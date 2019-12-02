import { getSum } from './index';

it('should get zero', () => {
    const result = getSum(-2, 2);

    expect(result).toEqual(0);
});
it('should get zero', () => {
    const result = getSum(-1, 0);

    expect(result).toEqual(0);
});

it('should get zero', () => {
    const result = getSum(5, 5);

    expect(result).toEqual(0);
});