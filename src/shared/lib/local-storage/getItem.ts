export const getLocalStorageItem = (key: string, subKey?: string) => {
    let parsedValue =
        typeof window !== 'undefined' && localStorage.getItem(key) !== null && JSON.parse(localStorage.getItem(key)!);

    if (subKey && parsedValue) {
        parsedValue = parsedValue[subKey];
    }

    return parsedValue;
};
