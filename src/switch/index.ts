type functionalType<T> = {
    case: (x, y) => functionalType<T>;
    unfold: () => T;
}

const functionalSwitch = <T>(comparor: Function, defaultVal: T = null): functionalType<T> => ({
    case: (toCompare, resolver) => comparor === toCompare 
            ? functionalSwitch(comparor, resolver())
            : functionalSwitch(comparor, defaultVal),
        
    unfold: () => defaultVal
});

export default functionalSwitch;