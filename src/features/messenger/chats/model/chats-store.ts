import { atom } from 'jotai';
import { Chat } from '../../chat/model/chat-types';

export const chatsAtom = atom<Chat[]>([]);
