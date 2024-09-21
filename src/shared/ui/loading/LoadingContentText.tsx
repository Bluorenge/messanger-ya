import { ReactNode } from 'react';
import { AbsoluteCenter, Spinner, Text } from '@chakra-ui/react';

export default function LoadingContentText({ isLoading, children }: { isLoading: boolean; children: ReactNode }) {
    return (
        <AbsoluteCenter>{isLoading ? <Spinner color="green.400" /> : <Text mb={0}>{children}</Text>}</AbsoluteCenter>
    );
}
