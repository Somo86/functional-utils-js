const slice = (from: number, to: number) => (list: any[]) => 
    list.slice(from, to + 1);

export default slice;