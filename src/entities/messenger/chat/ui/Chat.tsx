import { Box, HStack, Image, Text } from '@chakra-ui/react';

import ChatAddUserBtn from './ChatAddUserBtn';

export default function Chat({ chat }: any) {
    const { avatar, title } = chat;

    return (
        <Box>
            <HStack justify="space-between">
                <HStack>
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

                    <Text>{title}</Text>
                </HStack>

                <ChatAddUserBtn />
            </HStack>
        </Box>
    );
}
