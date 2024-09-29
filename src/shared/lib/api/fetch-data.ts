import { URLS } from '@/common/constants/global';

const defaultHeaders = {
    'Content-Type': 'application/json',
};

const fetchData = async <T = any>(path: string, options?: TObj): Promise<T> => {
    const requestOptions = {
        ...options,
        headers: {
            ...(options?.headers ? options.headers : defaultHeaders),
        },
        credentials: 'include',
    };

    const response = await fetch(`${URLS.API_BASE}${path}`, requestOptions);

    // Проверяем тип ответа
    const contentType = response.headers.get('Content-Type');

    let data;
    if (contentType && contentType.includes('application/json')) {
        data = await response.json();
    } else {
        data = await response.text();
    }

    return data;
};

export default fetchData;
