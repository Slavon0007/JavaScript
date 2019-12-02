import { getAdults } from './index';

it('should get result object', () => {

    const result = getAdults({ 'Tim': 31, 'Tom': 17, 'Jon': 22 });
    expect(result).toEqual({ 'Tim': 31, 'Jon': 22 });
});

it('should get result object', () => {

    const result = getAdults({});
    expect(result).toEqual({});
});

it('should get result object', () => {

    const result = getAdults({ 'Tim': 10, 'Tom': 10, 'Jon': 10 });
    expect(result).toEqual({});
});