import { increaser } from './index';

it('hould get number + index', () => {
    const result = increaser(-2, -4);

    expect(result).toEqual(-6);
});
it('hould get numdeb + index', () => {
    const result = increaser(0, -4);

    expect(result).toEqual(-4);

});
it('should get zero', () => {
    const result = increaser(2, -2);

    expect(result).toEqual(0);
});