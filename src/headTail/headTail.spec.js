import headTail from '../headTail';

const list = [1,2,3,4,5];

describe('spread list to head tail', () => {
    it('should return array', () =>  {
        expect(typeof  headTail(list)).toBe("object");
    });

    it('should return head and tail', () =>  {
        expect(headTail(list).length).toBe(2);
    });

    it('should return head and tail value', () =>  {
        const [head, tail] = headTail(list)
        
        expect(head).toBe(1);
        expect(tail).toBe(5);
    });

    it('should return undefined if not list provided', () =>  {
        const [head, tail] = headTail();
        expect(head).not.toBeDefined();
    });
});