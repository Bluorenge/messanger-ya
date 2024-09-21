import { Flex, FlexProps } from '@chakra-ui/react';

interface CustomControlProps {
    innerProps: any;
    children: any;
    styles?: FlexProps;
}

export default function CustomControl({ innerProps, children, styles }: CustomControlProps) {
    return (
        <Flex
            p="10px"
            minHeight="59px"
            border="none"
            borderRadius="xl"
            {...innerProps}
            {...styles}
        >
            {children}
        </Flex>
    );
}
