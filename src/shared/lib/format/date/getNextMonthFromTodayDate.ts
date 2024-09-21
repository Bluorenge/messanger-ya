import { add, format } from 'date-fns';

export function getNextMonthFromTodayDate() {
    const currentDate = new Date();

    const nextYearDate = add(currentDate, { months: 1 });

    const formattedDate = format(nextYearDate, 'MMMM dd, yyyy');

    return formattedDate;
}
