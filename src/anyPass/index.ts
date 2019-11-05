const anyPass = (predicate: (x) => boolean) => (val: any[]) => {
    const anyFn = (value, iteration = 0) => {
        return predicate(value)
            ? true
            : iteration < val.length 
                ? anyFn(val[iteration], iteration + 1)
                : false;
    };

    return anyFn(val[0], 0);
};

export default anyPass;
