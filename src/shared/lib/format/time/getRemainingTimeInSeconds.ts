import { parseISO, addHours, differenceInSeconds } from 'date-fns';

export function getRemainingTimeInSeconds(dateString: string, hours: number): number {
    const date = parseISO(dateString);
    const datePlusHours = addHours(date, hours);
    const now = new Date();

    const diffSeconds = differenceInSeconds(datePlusHours, now);

    if (diffSeconds <= 0) {
        return 0; // Time is up
    }

    return diffSeconds;
}
