export function getRemainingSecondsInCurrentHour(): number {
    const now = new Date();
    const currentHour = now.getHours();
    const nextHour = currentHour + 1;
    const endOfCurrentHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), nextHour, 0, 0, 0);
    const remainingMilliseconds = endOfCurrentHour.getTime() - now.getTime();
    const remainingSeconds = Math.floor(remainingMilliseconds / 1000);

    return remainingSeconds;
}
