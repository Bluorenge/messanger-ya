export const URLS = {
    API_BASE: 'https://ya-praktikum.tech/api/v2',

    REGISTER: '/auth/signup',
    LOGIN: '/auth/signin',
    USER: '/auth/user',
    LOGOUT: '/auth/logout',

    CHATS: '/chats',
    ADD_CHATS_USERS: '/chats/users',
    getChatToken: (chatId: number) => `/chats/token/${chatId}`,
    getChatSocket: (userId: number, chatId: number, token: number) =>
        `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`,

    USER_SEARCH: '/user/search',
};
