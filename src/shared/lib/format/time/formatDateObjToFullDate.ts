import { format, parse } from 'date-fns';

export function formatDateObjToFullDate(input: { date: string; hour: string; minutes: string }) {
    const inputDate = parse(input.date, 'MM/dd/yyyy', new Date());

    inputDate.setHours(parseInt(input.hour, 10));
    inputDate.setMinutes(parseInt(input.minutes, 10));
    inputDate.setSeconds(0);

    const formattedDate = format(inputDate, 'yyyy-MM-dd HH:mm:ss');

    return formattedDate;
}
