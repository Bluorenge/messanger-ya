'use client';

import { useEffect } from 'react';

import { URLS } from '@/common/constants/global';
import { FETCH_METHODS, fetchData } from '@/shared/lib';
import { useAtom } from 'jotai';
import { chatsAtom } from './chats-store';

export default function useChats() {
    const [chats, setChats] = useAtom(chatsAtom);

    async function getChats() {
        const response = await fetchData(URLS.CHATS, {
            method: FETCH_METHODS.GET,
        });
        console.log('response: ', response);

        if (response) {
            setChats(response);
        }
    }

    useEffect(() => {
        getChats();
    }, []);

    return { chats, getChats };
}
