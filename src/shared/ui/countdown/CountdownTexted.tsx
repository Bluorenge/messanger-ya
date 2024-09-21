import { BoxProps, Text } from '@chakra-ui/react';

import { useCountdown } from '@/shared/ui';

export default function CountdownTexted({ timerSeconds, styles }: { timerSeconds: number; styles?: BoxProps }) {
    const { hours, minutes, seconds } = useCountdown(timerSeconds);

    return (
        <Text
            mb={0}
            color="red.525"
            fontWeight={700}
            fontSize="xl"
            textAlign="center"
            {...styles}
        >
            {[hours, minutes, seconds].join(':')}
        </Text>
    );
}
