import { Box, Input, Text, VStack } from '@chakra-ui/react';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';

export default function RegisterPage() {
    return (
        <>
            <Field label="Login">
                <Input />
            </Field>

            <Field label="Password">
                <Input />
            </Field>

            <VStack>
                <Button>Register</Button>
                <Text>Login</Text>
            </VStack>
        </>
    );
}
