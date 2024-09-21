export function getBrand(headers: any, host?: string) {
    const url = host || headers.get('host');

    const protocol = '://';

    // Извлечение домена с портом из URL
    let domainWithPort;
    if (url.includes(protocol)) {
        domainWithPort = url.split(protocol)[1].split('/')[0];
    } else if (url.includes('/')) {
        domainWithPort = url.split('/')[0];
    } else {
        domainWithPort = url;
    }

    // Удаление порта из домена, если он есть
    const domainWithoutPort = domainWithPort.includes(':') ? domainWithPort.split(':')[0] : domainWithPort;

    // Разбиение домена на части и извлечение основного домена
    const domainParts = domainWithoutPort.split('.');
    const topLevelDomainIndex = domainParts.length - 1;
    let brand = domainParts[topLevelDomainIndex];

    // Если основной домен содержит две части, это означает, что у вас есть поддомен, поэтому необходимо взять предпоследнюю часть
    if (domainParts.length > 1) {
        brand = domainParts[topLevelDomainIndex - 1];
    }

    return brand;
}
