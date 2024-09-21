import { Box, Button, ButtonProps, Link, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface OutlineRoundedLink {
    url: string;
    title: string;
    icon: IconType;
    styles?: ButtonProps;
}

export default function OutlineRoundedLink({ icon, url, title, styles }: OutlineRoundedLink) {
    return (
        <Button
            as={Link}
            href={url}
            variant="outline-rounded"
            justifyContent="space-between"
            textTransform="uppercase"
            py={2.5}
            pr={8}
            {...styles}
        >
            <Text
                as="span"
                noOfLines={1}
                whiteSpace="normal"
            >
                {title}
            </Text>
            <Box
                as={icon}
                flexShrink={0}
                w="24px"
                h="24px"
                mt="1px"
            />
        </Button>
    );
}
