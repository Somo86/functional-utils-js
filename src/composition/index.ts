export const pipe = (...fns) => (val) => fns.reduce((acc, curr) => curr(acc), val);

export const compose = (...fns) => (val) => fns.reverse().reduce((acc, curr) => curr(acc), val);