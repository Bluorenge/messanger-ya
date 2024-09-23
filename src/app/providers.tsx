'use client';

import { ReactNode } from 'react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ColorModeProvider } from '@/components/ui/color-mode';
import { UserProvider } from '@/entities/user/user-data';

export function Providers({ children }: { children: ReactNode }) {
    return (
        <ChakraProvider value={defaultSystem}>
            <ColorModeProvider>
                <UserProvider>{children}</UserProvider>
            </ColorModeProvider>
        </ChakraProvider>
    );
}
