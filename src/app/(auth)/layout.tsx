import { ReactNode } from 'react';
import { Center, Container, Flex, Heading } from '@chakra-ui/react';

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <Container
            height="100vh"
            pt={5}
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
