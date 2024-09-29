import { useEffect, useState } from 'react';
import { RiMore2Fill } from 'react-icons/ri';
import { Box, Center, For, Input } from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { useAtomValue } from 'jotai';

import { URLS } from '@/common/constants/global';
import { Button } from '@/components/ui/button';
import {
    DialogBackdrop,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useChats } from '@/features/messenger/chats';
import { FETCH_METHODS, fetchData } from '@/shared/lib';
import ChatAddedUserItem from './ChatAddedUserItem';
import { chatAtom } from '@/features/messenger/chat/model/chat-store';

interface Inputs {
    login: string;
    usersId: number[];
}

export default function ChatAddUserBtn() {
    const chat = useAtomValue(chatAtom);

    const { register, control, handleSubmit, watch } = useForm<Inputs>();
    const [open, setOpen] = useState(false);
    const { getChats } = useChats();
    const [users, setUsers] = useState([]);

    const onSubmit = async (data: Inputs) => {
        console.log(data);
        const response = await fetchData(URLS.ADD_CHATS_USERS, {
            method: FETCH_METHODS.PUT,
            body: JSON.stringify({
                users: data.usersId,
                chatId: chat!.id,
            }),
        });

        if (response.reason) {
            console.log(response.reason);
        }

        if (response.id) {
            setOpen(false);
            getChats();
        }
    };

    const loginValue = watch('login');

    useEffect(() => {
        async function getUsers() {
            const response = await fetchData(URLS.USER_SEARCH, {
                method: FETCH_METHODS.POST,
                body: JSON.stringify({ login: loginValue }),
            });

            if (response.length > 0) {
                setUsers(response);
            }
        }

        getUsers();
    }, [loginValue]);

    return (
        <DialogRoot
            scrollBehavior="inside"
            open={open}
            onOpenChange={(e) => setOpen(e.open)}
        >
            <DialogBackdrop />

            <DialogTrigger asChild>
                <Center
                    w="30px"
                    h="30px"
                    cursor="pointer"
                >
                    <Box asChild>
                        <RiMore2Fill />
                    </Box>
                </Center>
            </DialogTrigger>

            <DialogContent asChild>
                <Box
                    as="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <DialogCloseTrigger />

                    <DialogHeader>
                        <DialogTitle>Create new chat</DialogTitle>
                    </DialogHeader>

                    <DialogBody>
                        <Input {...register('login')} />

                        <Box
                            h="300px"
                            overflowY="auto"
                        >
                            <Controller
                                name="usersId"
                                control={control}
                                render={({ field }) => (
                                    <Box>
                                        {users.map((user: any) => (
                                            <ChatAddedUserItem
                                                key={user.id}
                                                user={user}
                                                onClick={() => {
                                                    const currentUsers = Array.isArray(field.value) ? field.value : [];

                                                    if (currentUsers.includes(user.id)) {
                                                        field.onChange(
                                                            currentUsers.filter((id: number) => id !== user.id),
                                                        );
                                                    } else {
                                                        field.onChange([...currentUsers, user.id]);
                                                    }
                                                }}
                                                isSelected={Array.isArray(field.value) && field.value.includes(user.id)}
                                            />
                                        ))}
                                    </Box>
                                )}
                            />
                        </Box>
                    </DialogBody>

                    <DialogFooter>
                        <Button type="submit">Add user</Button>
                    </DialogFooter>
                </Box>
            </DialogContent>
        </DialogRoot>
    );
}
