'use client';

import { Box, Input, Text, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { fetchData, METHODS, validation } from '@/shared/lib';
import { URLS } from '@/common/constants/global';
import { useState } from 'react';

enum InputNames {
    first_name = 'first_name',
    second_name = 'second_name',
    login = 'login',
    email = 'email',
    password = 'password',
    phone = 'phone',
}

interface Inputs {
    [InputNames.first_name]: string;
    [InputNames.second_name]: string;
    [InputNames.login]: string;
    [InputNames.email]: string;
    [InputNames.password]: string;
    [InputNames.phone]: string;
}

export default function RegisterPage() {
    const [registerError, setRegisterError] = useState<string>('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit = async (data: Inputs) => {
        console.log(data);
        const response = await fetchData(URLS.REGISTER, {
            method: METHODS.POST,
            body: JSON.stringify(data),
        });

        if (response.reason) {
            setRegisterError(response.reason);
        }
    };

    return (
        <Box
            as="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Field
                label="First name"
                invalid={!!errors.first_name}
                errorText={errors.first_name?.message}
            >
                <Input {...register(InputNames.first_name, validation.name)} />
            </Field>

            <Field
                label="Second name"
                invalid={!!errors.second_name}
                errorText={errors.second_name?.message}
            >
                <Input {...register(InputNames.second_name, validation.name)} />
            </Field>

            <Field
                label="Login"
                invalid={!!errors.login}
                errorText={errors.login?.message}
            >
                <Input {...register(InputNames.login, validation.login)} />
            </Field>

            <Field
                label="Email"
                invalid={!!errors.email}
                errorText={errors.email?.message}
            >
                <Input {...register(InputNames.email, validation.email)} />
            </Field>

            <Field
                label="Phone"
                invalid={!!errors.phone}
                errorText={errors.phone?.message}
            >
                <Input {...register(InputNames.phone, validation.phone)} />
            </Field>

            <Field
                label="Password"
                invalid={!!errors.password}
                errorText={errors.password?.message}
            >
                <Input {...register(InputNames.password, validation.password)} />
            </Field>

            <VStack>
                <Button type="submit">Register</Button>
                {registerError && <Text>{registerError}</Text>}
                <Text>Login</Text>
            </VStack>
        </Box>
    );
}
