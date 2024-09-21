import { useEffect, useRef, useState } from 'react';
import { formatTimeToHourMinSec, formatTimeToMinAndSec, getRemainingSecondsInCurrentHour } from '@/shared/lib';

export default function useCountdown(totalSeconds?: number, isEndlessHour?: boolean) {
    const initialSeconds = isEndlessHour ? getRemainingSecondsInCurrentHour() : totalSeconds || 0;
    const [seconds, setSeconds] = useState(initialSeconds);
    const intervalIdRef = useRef<number | undefined>();

    useEffect(() => {
        intervalIdRef.current = window.setInterval(updateCountdown, 1000);

        function updateCountdown() {
            setSeconds((prevSeconds) => {
                if (prevSeconds > 0) {
                    return prevSeconds - 1;
                } else if (isEndlessHour) {
                    return getRemainingSecondsInCurrentHour();
                } else {
                    clearInterval(intervalIdRef.current as number);
                    return prevSeconds;
                }
            });
        }

        return () => {
            if (intervalIdRef.current !== undefined) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, [isEndlessHour]);

    const isLastMinute = seconds < 600;
    const countdownTime = isLastMinute ? formatTimeToMinAndSec(seconds) : formatTimeToHourMinSec(seconds);

    return {
        hours: countdownTime.displayHours || 0,
        minutes: countdownTime.displayMinutes,
        seconds: countdownTime.displaySeconds,
        isLastMinute,
    };
}
