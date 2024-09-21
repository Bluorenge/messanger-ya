export function isHostInList(domains) {
    if (typeof window === 'undefined') {
        return false;
    }
    const currentHost = window.location.host;

    return domains.some((domain: string) => {
        const regex = new RegExp(`(^|\\.)${domain}`);
        return regex.test(currentHost);
    });
}
