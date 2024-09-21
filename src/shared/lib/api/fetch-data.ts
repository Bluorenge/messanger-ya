import { URLS } from '@/common/constants/global';

const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

const fetchData = async <T = any>(path: string, options?: TObj): Promise<T> => {
    const requestOptions = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...(options?.headers || {}),
        },
    };

    const response = await fetch(`${URLS.API_BASE}${path}`, requestOptions);

    const data: T = await response.json();

    return data;
};

export default fetchData;
