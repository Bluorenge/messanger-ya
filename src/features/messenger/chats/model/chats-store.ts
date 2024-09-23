import { atom } from 'jotai';
import { Chat } from './types';

export const chatsAtom = atom<Chat[]>([]);
