export const mergeArr = (a: any, b: any[], predicate = (a: any, b: any) => a === b) => {
    const c = [...a];
    b.forEach((bItem: any) => (c.some((cItem) => predicate(bItem, cItem)) ? null : c.push(bItem)));

    return c;
};
