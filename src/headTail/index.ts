const headTail = (el: any[]) => {
    if(el && el.length > 1) {
        const [head, ...rest] = el;
        const tail = rest.slice(-1)[0];
        return [head, tail];
    } else return [undefined, undefined];
}

export default headTail;