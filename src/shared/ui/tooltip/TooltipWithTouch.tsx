import { ReactNode, useEffect, useState } from 'react';
import { Box, Tooltip } from '@chakra-ui/react';

export default function TooltipWithTouch({
    children,
    isActive,
    ...restToolTipProps
}: {
    children: ReactNode;
    isActive: boolean;
    [key: string]: any;
}) {
    const [isLabelOpen, setIsLabelOpen] = useState(false);

    useEffect(() => {
        setIsLabelOpen(false);
    }, []);

    return (
        <Tooltip
            isOpen={isActive ? isLabelOpen : false}
            {...restToolTipProps}
        >
            <Box
                w="100%"
                onMouseEnter={() => setIsLabelOpen(true)}
                onMouseLeave={() => setIsLabelOpen(false)}
                onTouchStart={() => setIsLabelOpen(true)}
                onClick={() => setIsLabelOpen(true)}
            >
                {children}
            </Box>
        </Tooltip>
    );
}
