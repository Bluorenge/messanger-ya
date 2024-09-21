export function isInAppBrowser() {
    const userAgent = navigator.userAgent || navigator.vendor;

    return /FBAN|FBAV|Instagram|Snapchat|Twitter|line/i.test(userAgent);
}
