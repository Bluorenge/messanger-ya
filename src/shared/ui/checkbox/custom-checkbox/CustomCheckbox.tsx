import { ReactNode } from 'react';
import { Box, CheckboxProps, Flex, FormLabel, FormLabelProps, useCheckbox } from '@chakra-ui/react';

import { CheckboxData } from '@/shared/models';
import { RiCheckboxBlankLine, RiCheckboxLine } from 'react-icons/ri';

interface CustomCheckboxProps {
    checkboxProps: CheckboxProps;
    LabelEl?: (props: any) => ReactNode;
    checkboxData?: CheckboxData;
    iconColor?: string;
    styles?: FormLabelProps;
}

export default function CustomCheckbox({
    checkboxProps,
    LabelEl,
    checkboxData,
    iconColor,
    styles,
}: CustomCheckboxProps) {
    const { state, getInputProps, getCheckboxProps, htmlProps } = useCheckbox(checkboxProps);

    return (
        <FormLabel
            cursor="pointer"
            m={0}
            _hover={{ opacity: 0.7 }}
            {...styles}
            {...htmlProps}
        >
            <input
                {...getInputProps()}
                hidden
            />

            <Flex
                {...getCheckboxProps()}
                gap={2.5}
            >
                <Box
                    as={state.isChecked ? RiCheckboxLine : RiCheckboxBlankLine}
                    flexShrink={0}
                    w="24px"
                    h="24px"
                    color={iconColor ? iconColor : 'green.400'}
                />
                {checkboxData && checkboxData.label}
                {LabelEl && <LabelEl />}
            </Flex>
        </FormLabel>
    );
}
