import always from '../always';

describe('always composable function', () => {
    it('should return same input as output', () =>  {
        expect(always(0)).toBe(0);
    });
});