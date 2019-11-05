import pathOr from '../pathOr';

const value = {value: 1};
const or = 0;

describe('get Path or else', () => {
    it('should return same input as output', () =>  {
        expect(pathOr(or, ['value'])(value)).toBe(value.value);
    });

    it('should return else if value doesn\'t exist', () =>  {
        expect(pathOr(or, ['noDefined'])(value)).toBe(or);
    });

    it('should allow composable', () => {
        const pathEl = pathOr(or, ['noDefined']);
        expect(typeof pathEl).toBe('function');
    });
});