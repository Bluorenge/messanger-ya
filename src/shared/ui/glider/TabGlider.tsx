import { Box } from '@chakra-ui/react';
import { RefObject, useEffect, useState } from 'react';

interface TabGliderProps {
    gliderRef: RefObject<HTMLButtonElement>;
    tabIndex: number;
}

export default function TabGlider({ gliderRef, tabIndex }: TabGliderProps) {
    const [gliderWidth, setGliderWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (gliderRef.current) {
                setGliderWidth(gliderRef.current.offsetWidth);
            }
        };

        window.addEventListener('resize', handleResize);

        // Вызывается при монтировании компонента
        handleResize();

        return () => {
            // Очистка слушателя при размонтировании компонента
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box
            pos="absolute"
            zIndex={10}
            borderRadius="xl"
            w={`${gliderWidth}px`}
            h="100%"
            bgColor="green.400"
            transform={`translate(${tabIndex * 100}%)`}
            transition="transform 0.2s ease-in-out"
        />
    );
}
