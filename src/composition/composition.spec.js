import { pipe, compose } from '../composition';

const sum = x => x + 1;
const multiply = x => x * 2;

describe('composition functions pipe / compose', () => {
    
    it('should allow composable functions', () =>  {
        expect(typeof pipe(sum)).toBe('function');
        expect(typeof compose(sum)).toBe('function');
    });

    it('should allow composition left to right', () =>  {
        expect(pipe(
            sum,
            multiply
        )(2)).toBe(6);
    });

    it('should allow composition right to left', () =>  {
        expect(compose(
            sum,
            multiply
        )(2)).toBe(5);
    });
});