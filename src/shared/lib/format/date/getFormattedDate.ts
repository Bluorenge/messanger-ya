import { isToday, isYesterday, isTomorrow, format, isAfter } from 'date-fns';

export interface FormatData {
    isToday: boolean;
    isUpcoming: boolean;
    day: string;
    time: string;
    monthYear: string;
}

export function getFormattedDate(date: string): FormatData {
    const ON_AIR_DELAY = 1;

    const convertedDate = date.replace(' ', 'T').replace(' ', ':').replace(' ', ':'); // если придет YYYY-MM-DD h m s
    const now = new Date();
    const currentDate = new Date(convertedDate);
    now.setHours(now.getHours() - ON_AIR_DELAY);

    let day;
    const isTodayDate = isToday(currentDate);

    if (isTodayDate) {
        day = `Today`;
    } else if (isYesterday(currentDate)) {
        day = `Yesterday`;
    } else if (isTomorrow(currentDate)) {
        day = `Tomorrow`;
    } else {
        day = format(currentDate, 'd MMM');
    }

    return {
        isToday: isTodayDate,
        isUpcoming: isAfter(currentDate, now),
        day: day,
        time: format(currentDate, 'HH:mm'),
        monthYear: format(currentDate, 'MMMM yyyy'),
    };
}
