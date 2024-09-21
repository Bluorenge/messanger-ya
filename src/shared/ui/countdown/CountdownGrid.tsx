import { BoxProps, HStack, Text, VStack } from '@chakra-ui/react';

import { useCountdown } from '@/shared/ui';

export default function CountdownGrid({
    timerSeconds,
    styles,
    backgroundColor,
}: {
    timerSeconds: number;
    styles?: BoxProps;
    backgroundColor?: string;
}) {
    const { hours, minutes, seconds } = useCountdown(timerSeconds);

    return (
        <HStack
            color="white"
            {...styles}
        >
            {[
                {
                    value: hours,
                    title: 'hours',
                },
                {
                    value: minutes,
                    title: 'minutes',
                },
                {
                    value: seconds,
                    title: 'seconds',
                },
            ].map(({ value, title }, index) => (
                <VStack
                    key={title}
                    spacing={0}
                    w="60px"
                    py="2px"
                    px="12px"
                    backgroundColor={backgroundColor ? backgroundColor : '#6a339a'}
                    borderRadius="lg"
                    textAlign="center"
                >
                    <Text
                        as="span"
                        fontSize="32px"
                        fontWeight={500}
                        lineHeight={1.2}
                    >
                        {value}
                    </Text>

                    <Text
                        as="span"
                        fontSize="sm"
                        color={backgroundColor ? 'white' : '#d3c2e2'}
                    >
                        {title}
                    </Text>
                </VStack>
            ))}
        </HStack>
    );
}
