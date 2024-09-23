import { atom } from 'jotai';
import { Chat } from './types';

export const chatAtom = atom<Chat | null>(null);
