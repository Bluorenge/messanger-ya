export function isElementPartiallyVisible(element: any) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    return (rect.top <= windowHeight && rect.bottom >= 0) || (rect.bottom >= 0 && rect.top <= 0);
}
