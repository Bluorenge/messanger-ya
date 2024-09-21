import { Text, TextProps } from '@chakra-ui/react';

import { useIsClient } from '@/shared/lib';
import useCountdown from './useCountdown';

interface CountdownProps {
    totalSeconds?: number;
    isEndlessHour?: boolean;
    styles?: TextProps;
}

export default function Countdown({ totalSeconds, isEndlessHour, styles }: CountdownProps) {
    const { hours, minutes, seconds, isLastMinute } = useCountdown(totalSeconds, isEndlessHour);
    const isClient = useIsClient();

    const placeholder = `--:--${isEndlessHour && isLastMinute ? ':--' : ''}`;

    return (
        <Text
            as="span"
            {...styles}
        >
            {isClient ? `${hours}:${minutes}:${seconds}` : placeholder}
        </Text>
    );
}
