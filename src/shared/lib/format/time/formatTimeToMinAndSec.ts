interface FormatTimeToHourMinSecData {
    displayHours?: number;
    displayMinutes: string;
    displaySeconds: string;
}

export function formatTimeToMinAndSec(sec: number): FormatTimeToHourMinSecData {
    const formattedMinutes = Math.floor(sec / 60);
    const formattedSeconds = sec % 60;
    const displayMinutes = formattedMinutes < 10 ? `0${formattedMinutes}` : formattedMinutes.toString();
    const displaySeconds = formattedSeconds < 10 ? `0${formattedSeconds}` : formattedSeconds.toString();

    return { displayMinutes, displaySeconds };
}
