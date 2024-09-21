import { atom } from 'jotai';
import { atomWithCache } from 'jotai-cache';

import { fetchData, METHODS } from '@/shared/lib';
import { URLS } from '@/common/constants/global';
import { UserData } from '@/entities/user/user-data';

export const userAtom = atom<UserData | null>(null);

export const fetchUserAtom = atomWithCache(async function getUser() {
    try {
        const { data } = await fetchData(URLS.USER, {
            method: METHODS.GET,
        });
        return data;
    } catch (error) {
        return null;
    }
});
