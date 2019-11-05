import anyPass from '../anyPass';

const predicate = x => x === false;
const values = [true, true, true];

describe('define if any pass based on a predicate', () => {
    it('should return false', () => {
        expect(anyPass(predicate)(values)).toBeFalsy();
    });

    it('should return true', () => {
        expect(anyPass(predicate)(values.concat([false]))).toBeTruthy();
    });

    it('should return true and accept composition', () => {
        const composedAny = anyPass(predicate);
        expect(composedAny([false].concat(values))).toBeTruthy();
    });
});