'use client';

import { useSetAtom } from 'jotai';
import { Box, Flex, For } from '@chakra-ui/react';

import { CreateChatBtn, useChats } from '@/features/messenger/chats';
import { chatAtom } from '@/features/messenger/chat/model/chat-store';
import ChatsItem from './ChatsItem';

export default function Chats() {
    const { chats } = useChats();
    const setChat = useSetAtom(chatAtom);

    return (
        <Box>
            <Flex
                flexDir="column"
                gap={5}
                mb={5}
            >
                <For each={chats}>
                    {(chat) => (
                        <ChatsItem
                            key={chat.id}
                            chat={chat}
                            onClick={setChat}
                        />
                    )}
                </For>
            </Flex>

            <Box>
                <CreateChatBtn />
            </Box>
        </Box>
    );
}
