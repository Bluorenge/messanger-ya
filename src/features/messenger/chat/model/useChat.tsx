import { URLS } from '@/common/constants/global';
import { userAtom } from '@/entities/user/user-data';
import { fetchData, FETCH_METHODS } from '@/shared/lib';
import { useAtomValue } from 'jotai';
import { useState, useEffect, useRef } from 'react';
import { chatAtom } from './chat-store';
import { useChats } from '../../chats';

export enum WSTransportEvents {
    Connected = 'connected',
    Error = 'error',
    Message = 'message',
    Close = 'close',
}

export default function useChat() {
    const [messages, setMessages] = useState<any[]>([]);
    const { getChats } = useChats();

    // Используем Map для хранения сокетов и интервалов
    const socketsMap = useRef<Map<number, WebSocket>>(new Map()); // Хранение сокетов
    const pingPongIntervalMap = useRef<Map<number, any>>(new Map()); // Хранение интервалов пинга

    const user = useAtomValue(userAtom);
    const chat = useAtomValue(chatAtom);

    useEffect(() => {
        async function setWsChat() {
            // Получаем токен и создаем WebSocket
            const { token } = await fetchData(URLS.getChatToken(chat!.id), {
                method: FETCH_METHODS.POST,
            });

            // Создаем новый WebSocket для чата
            const socket = new WebSocket(URLS.getChatSocket(user!.id, chat!.id, token));

            // Сохраняем WebSocket в Map по chat.id
            socketsMap.current.set(chat!.id, socket);

            socket.addEventListener('open', () => {
                console.log('Соединение установлено для чата:', chat!.id);

                // Отправка запроса на получение старых сообщений
                socket.send(
                    JSON.stringify({
                        content: '0',
                        type: 'get old',
                    }),
                );
            });

            socket.addEventListener('close', (event) => {
                if (event.wasClean) {
                    console.log(`Соединение закрыто чисто для чата: ${chat!.id}`);
                } else {
                    console.log(`Обрыв соединения для чата: ${chat!.id}`);
                }

                console.log(`Код: ${event.code} | Причина: ${event.reason}`);

                // Очищаем интервал и удаляем сокет из Map при закрытии соединения
                clearInterval(pingPongIntervalMap.current.get(chat!.id));
                pingPongIntervalMap.current.delete(chat!.id);
                socketsMap.current.delete(chat!.id);
            });

            socket.addEventListener('message', (event) => {
                const data = JSON.parse(event.data);

                if (Array.isArray(data) && messages.length === 0) {
                    // Получаем текущие сообщения
                    const currentMessages = messages;

                    // Используем Set для хранения уникальных ID уже существующих сообщений
                    const messageSet = new Set(currentMessages.map((message) => message.id));

                    // Фильтруем массив, добавляя только уникальные сообщения (которых нет в Set)
                    const uniqueMessages = data.filter((message) => !messageSet.has(message.id));

                    // Добавляем уникальные сообщения в состояние
                    if (uniqueMessages.length > 0) {
                        setMessages(uniqueMessages);
                    }
                } else if (data.type === 'message') {
                    setMessages((prev) => [...prev, data]);
                }
            });

            socket.addEventListener('error', (event) => {
                console.log(`Ошибка для чата ${chat!.id}:`, event.message);
            });

            // Устанавливаем интервал для пинга и сохраняем его в Map
            const pingInterval = setInterval(() => {
                socket.send(JSON.stringify({ type: 'ping' }));
            }, 5000);

            pingPongIntervalMap.current.set(chat!.id, pingInterval);
        }

        // Если сокета для текущего чата еще нет, создаем его
        if (!socketsMap.current.has(chat!.id)) {
            setWsChat();
        }

        // Очищаем сокет и интервал при размонтировании компонента
        return () => {
            const socket = socketsMap.current.get(chat!.id);

            if (socket) {
                socket.close();
            }
            clearInterval(pingPongIntervalMap.current.get(chat!.id));
        };
    }, [chat, user]);

    // Функция отправки сообщения
    function sendMessage(content: string) {
        const socket = socketsMap.current.get(chat!.id);

        if (socket) {
            socket.send(
                JSON.stringify({
                    content,
                    type: 'message',
                }),
            );
            getChats(); // чтобы обновить время последнего сообщения в списке чатов
        } else {
            console.log('Соединение не установлено');
        }
    }

    return { messages, sendMessage };
}
