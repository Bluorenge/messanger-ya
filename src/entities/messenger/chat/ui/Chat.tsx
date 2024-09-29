'use client';

import { useForm } from 'react-hook-form';
import { Box, Button, For, HStack, Image, Input, Text } from '@chakra-ui/react';

import ChatAddUserBtn from './ChatAddUserBtn';
import { useChat } from '@/features/messenger/chat';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/entities/user/user-data';

enum InputNames {
    message = 'message',
}

interface Inputs {
    [InputNames.message]: string;
}

export default function Chat({ chat }: any) {
    const { avatar, title } = chat;
    const { register, handleSubmit, reset } = useForm<Inputs>();
    const { messages, sendMessage } = useChat();

    const user = useAtomValue(userAtom);
    console.log('messages: ', messages);

    function onSubmit(data: Inputs) {
        console.log('data: ', data);
        sendMessage(data[InputNames.message]);
        reset();
    }

    return (
        <Box>
            <HStack justify="space-between">
                <HStack>
                    {avatar ? (
                        <Image
                            src={avatar}
                            alt="user-avatar"
                            w="35px"
                            h="35px"
                            borderRadius="full"
                        />
                    ) : (
                        <Box
                            w="35px"
                            h="35px"
                            borderRadius="full"
                            bg="gray"
                        />
                    )}

                    <Text>{title}</Text>
                </HStack>

                <ChatAddUserBtn />
            </HStack>

            <Box>
                <For each={messages}>
                    {(message) => {
                        return (
                            <HStack
                                key={message.id}
                                p={5}
                                bg="gray.700"
                                flexDir={message.user_id === user?.id ? 'row-reverse' : 'row'}
                            >
                                <Text>{message.user_id}</Text>
                                <Text>{message.content}</Text>
                            </HStack>
                        );
                    }}
                </For>
            </Box>

            <Box
                as="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input {...register(InputNames.message)} />
                <Button type="submit">Send</Button>
            </Box>
        </Box>
    );
}
