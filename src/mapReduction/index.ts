const mapReduction = <T>(reduction: (a,b) => {}, accumulator: any) => (data: T[][]) => 
    data.map(mapped => mapped.reduce(reduction, accumulator));

export default mapReduction;  