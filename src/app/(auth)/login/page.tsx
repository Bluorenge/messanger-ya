'use client';

import { Input, Link, Text, VStack } from '@chakra-ui/react';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { useForm } from 'react-hook-form';
import { fetchData, FETCH_METHODS } from '@/shared/lib';
import { URLS } from '@/common/constants/global';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

enum InputNames {
    login = 'login',
    password = 'password',
}

interface Inputs {
    [InputNames.login]: string;
    [InputNames.password]: string;
}

export default function LoginPage() {
    const router = useRouter();
    const [loginError, setLoginError] = useState<string>('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit = async (data: Inputs) => {
        console.log(data);

        const response = await fetchData(URLS.LOGIN, {
            method: FETCH_METHODS.POST,
            body: JSON.stringify(data),
            credentials: 'include',
        });

        if (response.id || response.reason === 'User already in system') {
            router.push('/chats');
        }

        if (response.reason) {
            setLoginError(response.reason);
        }
    };

    return (
        <VStack
            as="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Field
                label="Login"
                invalid={!!errors.login}
                errorText={errors.login?.message}
            >
                <Input {...register(InputNames.login, { required: true })} />
            </Field>

            <Field
                label="Password"
                invalid={!!errors.password}
                errorText={errors.password?.message}
            >
                <Input {...register(InputNames.password, { required: true })} />
            </Field>

            <VStack>
                <Button type="submit">Login</Button>
                {loginError && <Text>{loginError}</Text>}
                <Link href="/register">Register</Link>
            </VStack>
        </VStack>
    );
}
