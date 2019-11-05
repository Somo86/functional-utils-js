const pathOr = (or: any, path: string[]) => (val: Object) => {
    const pathObj = (value, iteration = 0) => {
        if (typeof value === "undefined") {
            return or;
        } else {
            return iteration === path.length 
                ? value
                : pathObj(value[path[iteration]], iteration + 1);
        }
    }
    return pathObj(val, 0);
};

export default pathOr;