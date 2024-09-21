import { Box, Flex, useCheckbox, Text, Img, FlexProps } from '@chakra-ui/react';
import { RiCheckboxLine, RiCheckboxBlankLine } from 'react-icons/ri';

import { CheckboxData } from '@/shared/models';

interface CustomCheckboxIconProps {
    checkboxData: CheckboxData;
    styles?: FlexProps;
    isChecked?: boolean;
}

export default function CustomCheckboxIcon({
    checkboxData: { value, label, icon },
    styles,
    ...props
}: CustomCheckboxIconProps) {
    const { state, getInputProps } = useCheckbox(props);

    const input = getInputProps();

    return (
        <Flex
            as="label"
            cursor="pointer"
            gap={2.5}
            w="100%"
            p="15px"
            borderRadius="xl"
            border="2px solid transparent"
            backgroundColor="#fff"
            sx={{
                borderColor: state.isChecked && 'green.400',
            }}
            {...styles}
        >
            <input {...input} />

            <Img
                src={`/img/emoji/${icon}.png`}
                alt={`icon-${value}`}
                w="24px"
                h="24px"
            />

            <Text mb={0}>{label}</Text>

            <Box
                w="24px"
                h="24px"
                ml="auto"
                color="green.400"
            >
                {state.isChecked ? <RiCheckboxLine fontSize="24px" /> : <RiCheckboxBlankLine fontSize="24px" />}
            </Box>
        </Flex>
    );
}
