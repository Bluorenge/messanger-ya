interface User {
    first_name: string;
    second_name: string;
    avatar: string;
    email: string;
    login: string;
    phone: string;
}

interface LastMessage {
    user: User;
    time: string;
    content: string;
}

export interface Chat {
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    created_by: number;
    last_message: LastMessage;
}
