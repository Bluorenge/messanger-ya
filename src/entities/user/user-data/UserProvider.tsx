'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAtom } from 'jotai';

import { URLS } from '@/common/constants/global';
import { fetchData, FETCH_METHODS } from '@/shared/lib';
import { userAtom } from '@/entities/user/user-data';

export default function UserProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [userData, setUserData] = useAtom(userAtom);

    useEffect(() => {
        async function getUser() {
            const user = await fetchData(URLS.USER, {
                method: FETCH_METHODS.GET,
            });

            if (user.id && !userData) {
                setUserData(user);
            }

            if (user.id && pathname === '/') {
                router.push('/chats');
            } else if (!user.id && pathname !== '/login' && pathname !== '/register') {
                router.push('/login');
            }
        }
        getUser();
    }, []);

    return children;
}
