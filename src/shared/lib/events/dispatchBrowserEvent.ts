export function dispatchBrowserEvent(eventName: any, eventData: any) {
    const event = new CustomEvent(eventName, { detail: eventData });

    typeof window !== 'undefined' && window.dispatchEvent(event);
}
