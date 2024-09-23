'use client';

import { HStack, Image, Link } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';

import { userAtom } from '../user-data';

export default function AvataredUserSettingsLink({ styles }: { styles?: any }) {
    const user = useAtomValue(userAtom);

    return (
        <HStack {...styles}>
            <Image
                src={user && user.avatar ? user.avatar : 'https://via.placeholder.com/35'}
                alt="user-avatar"
                borderRadius="full"
            />
            <Link href="profile">Profile</Link>
        </HStack>
    );
}
