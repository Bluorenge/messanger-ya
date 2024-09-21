interface FormatTimeToHourMinSecData {
    displayHours: string;
    displayMinutes: string;
    displaySeconds: string;
}

export function formatTimeToHourMinSec(sec: number): FormatTimeToHourMinSecData {
    const formattedHours = Math.floor(sec / 3600);
    const remainingSecondsAfterHours = sec % 3600;
    const formattedMinutes = Math.floor(remainingSecondsAfterHours / 60);
    const formattedSeconds = remainingSecondsAfterHours % 60;

    const displayHours = formattedHours < 10 ? `0${formattedHours}` : formattedHours.toString();
    const displayMinutes = formattedMinutes < 10 ? `0${formattedMinutes}` : formattedMinutes.toString();
    const displaySeconds = formattedSeconds < 10 ? `0${formattedSeconds}` : formattedSeconds.toString();

    return {
        displayHours,
        displayMinutes,
        displaySeconds,
    };
}
