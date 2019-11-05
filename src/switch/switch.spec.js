import functionlSwitch from '../switch';

const comparor = 1;
const resolvedVal =  'ok';
const resolver = () => resolvedVal;
const defaultVal = 'default'

describe('functional switch', () => {
    it('a non resolved case should return match a case', () => {
        expect(
            functionlSwitch(comparor, defaultVal)
                .case(1, resolver)
                .unfold()
        ).toBe(resolvedVal);
    });    

    it('if no unfold value, switch shouldn\'t be terminated', () => {
        expect(
            typeof functionlSwitch(comparor, defaultVal).case(1, resolver)
        ).toBe('object');
    });

    it('should return default value if there is any match', () => {
        expect(
            functionlSwitch(comparor, defaultVal)
                .case(2, resolver)
                .unfold()
        ).toBe(defaultVal);
    });

    it('should return null if not default defined neither match', () => {
        expect(
            functionlSwitch(comparor)
                .case(2, resolver)
                .unfold()
        ).toBe(null);
    });

    it('should concatenate cases until a match is found', () => {
        expect(
            functionlSwitch(comparor + 2, defaultVal)
            .case(1, () => 1)
            .case(2, () => 2)
            .case(3, () => 3)
            .unfold()
        ).toBe(3);
    });
});