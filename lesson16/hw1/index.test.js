import { createArrayOfFunctions } from './index';

it('should get []', () => {
    const array = createArrayOfFunctions();

    expect(array).toEqual([]);
});

it('should get null', () => {
    const array = createArrayOfFunctions('');

    expect(array).toEqual(null);
});