import { compareSums } from './index';

it('should get false', () => {
    const result = compareSums(0, 0, 0, 0);

    expect(result).toEqual(false);
});

it('should get false', () => {
    const result = compareSums(-1, 1, 1, -1);

    expect(result).toEqual(false);
});

it('should get false', () => {
    const result = compareSums(-1, 0, 0, 1);

    expect(result).toEqual(false);
});