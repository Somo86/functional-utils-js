const lens = (prop: string) => ({
    view: (store) => store[prop],
    set: (value, store) => ({
        ...store,
        [prop]: value,
    }),
    over: (functor, store) => ({
        ...store,
        [prop]: functor(lens(prop).view(store)),
    }),
});

export default lens;
