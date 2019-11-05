import mapReduction from '../mapReduction';

const mapList = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
];

const reduceFn = (acc, curr) => acc + curr;
let reduction;

beforeAll(() => {
    reduction = mapReduction(reduceFn, 0)(mapList);
});

describe('mapReduction', () => {
    it('should reduce and map a list', () =>  {
        expect(reduction.length).toBe(3);
    });

    it('should apply reduce function', () =>  {
        expect(reduction[0]).toBe(6);
    });
});