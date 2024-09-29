'use client';

import { Grid, GridItem } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';

import { Chats } from '@/entities/messenger/chats';
import { AvataredUserSettingsLink } from '@/entities/user/avatared-user-settings-link';
import { chatAtom } from '@/features/messenger/chat/model/chat-store';
import { Chat } from '@/entities/messenger/chat';

export default function ChatsPage() {
    const chat = useAtomValue(chatAtom);

    return (
        <Grid templateColumns="repeat(12, 1fr)">
            <GridItem colSpan={{ base: 12, md: 3 }}>
                <AvataredUserSettingsLink styles={{ p: 5 }} />

                <Chats />
            </GridItem>

            <GridItem
                colSpan={{ md: 9 }}
                display={{ base: 'none', md: 'block' }}
            >
                {chat ? <Chat chat={chat} /> : 'Choose or create chat'}
            </GridItem>
        </Grid>
    );
}
