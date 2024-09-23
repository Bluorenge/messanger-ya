'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';

import { URLS } from '@/common/constants/global';
import { fetchData, FETCH_METHODS } from '@/shared/lib';
import { userAtom } from '@/entities/user/user-data';

export default function UserProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const [userData, setUserData] = useAtom(userAtom);

    useEffect(() => {
        async function getUser() {
            const user = await fetchData(URLS.USER, {
                method: FETCH_METHODS.GET,
            });

            if (user.id && !userData) {
                setUserData(user);
            }

            if (user.id) {
                router.push('/chats');
            }
        }
        getUser();
    }, []);

    return children;
}
