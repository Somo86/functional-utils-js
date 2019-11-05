import slice from '../slice';

const list = [1, 2, 3, 4];

describe('slice functional', () => {
    it('should return an array', () =>  {
        expect(typeof slice(0, 2)(list)).toBe('object');
    });

    it('should return from first to third', () =>  {
        expect(slice(0, 2)(list).length).toBe(3);
    });

    it('should return partial array', () =>  {
        expect(slice(0, 2)(list)).toContain(2);
    });
});
