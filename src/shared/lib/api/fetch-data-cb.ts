import { useBoolean } from '@chakra-ui/react';

import { FETCH_METHODS } from './types';
import fetchData from './fetch-data';

export async function fetchDataCb<T = any>(
    method: FETCH_METHODS,
    path: string,
    setCb: (data: T) => void,
    loadingCb?: ReturnType<typeof useBoolean>[1],
) {
    try {
        loadingCb && loadingCb.on();

        const response = await fetchData(path, { method });
        setCb(response);
    } finally {
        loadingCb && loadingCb.off();
    }
}
