import { atom } from 'jotai';
import { Chat } from './chat-types';

export const chatAtom = atom<Chat | null>(null);
