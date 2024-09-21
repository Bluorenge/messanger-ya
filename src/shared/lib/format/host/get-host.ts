const LOCAL_API_HOST = 'http://fullofmind.lc';

export function getHostFromHeaders(headers: any) {
    const url = headers.get('host');
    const newUrl = url.replace(/^https:\/\/[^.]+\./, 'https://');

    return newUrl.includes('localhost') ? LOCAL_API_HOST : `https://newmindstart.com`;
    // return newUrl.includes('localhost') ? LOCAL_API_HOST : `https://${newUrl}`;
}
