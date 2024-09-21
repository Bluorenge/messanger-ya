import { ReactNode } from 'react';
import { Center, Container, Flex, Heading } from '@chakra-ui/react';

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <Container
            pt={5}
            h="100vh"
        >
            <Heading textAlign="center">Messenger</Heading>

            <Center height="100%">
                <Flex
                    flexDir="column"
                    gap={5}
                    p={5}
                    border="1px solid"
                >
                    {children}
                </Flex>
            </Center>
        </Container>
    );
}
