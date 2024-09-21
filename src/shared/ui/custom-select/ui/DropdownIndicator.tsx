import { Box } from '@chakra-ui/react';
import { RiArrowDownSFill } from 'react-icons/ri';

export default function DropdownIndicator({ innerProps }: { innerProps: any }) {
    return (
        <Box
            pl={2}
            {...innerProps}
        >
            <RiArrowDownSFill
                size="24px"
                color="var(--chakra-colors-green-400)"
            />
        </Box>
    );
}
