import { Box } from '@chakra-ui/react';
import { RiCloseFill } from 'react-icons/ri';

export default function ClearIndicator({ innerProps }: { innerProps: any }) {
    return (
        <Box
            p={3}
            {...innerProps}
        >
            <RiCloseFill />
        </Box>
    );
}
