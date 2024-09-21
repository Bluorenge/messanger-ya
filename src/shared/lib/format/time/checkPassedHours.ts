import { parse, subHours, isBefore } from 'date-fns';

export function checkPassedHours(dateString: string, compareHours: number) {
    const date = parse(dateString, 'yyyy-MM-dd HH:mm:ss', new Date());

    const dateMinusHours = subHours(date, compareHours);
    const now = new Date();

    // Проверяем, находится ли текущая дата после даты, уменьшенной на compareHours
    const isPassed = isBefore(now, dateMinusHours);

    return isPassed;
}
