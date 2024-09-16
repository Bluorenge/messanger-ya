'use client';

import { ReactNode } from 'react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ColorModeProvider } from '@/components/ui/color-mode';

export function Providers({ children }: { children: ReactNode }) {
    return (
        <ChakraProvider value={defaultSystem}>
            <ColorModeProvider>{children}</ColorModeProvider>
        </ChakraProvider>
    );
}
