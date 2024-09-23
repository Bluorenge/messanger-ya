import { atom } from 'jotai';

interface User {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    phone: string;
    login: string;
    avatar: string;
    email: string;
}

export const userAtom = atom<User | null>(null);
