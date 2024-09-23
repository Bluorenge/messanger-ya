import { Box, HStack, Image, Text } from '@chakra-ui/react';

export default function ChatsItem({ chat, onClick }: any) {
    const { last_message, title, avatar } = chat;

    return (
        <HStack
            onClick={() => onClick(chat)}
            p={5}
        >
            {avatar ? (
                <Image
                    src={avatar}
                    alt="user-avatar"
                    w="35px"
                    h="35px"
                    borderRadius="full"
                />
            ) : (
                <Box
                    w="35px"
                    h="35px"
                    borderRadius="full"
                    bg="gray"
                />
            )}

            <Box>
                <Text>{title}</Text>
                <Text>{last_message?.user?.login}</Text>
            </Box>
        </HStack>
    );
}
