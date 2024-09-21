import { addDays, format } from 'date-fns';
export function getNextDay(formatString = 'MMMM d, yyyy') {
    const today = new Date();
    const nextDay = addDays(today, 1);
    const formattedDate = format(nextDay, formatString);

    return formattedDate;
}
