import { Flex, Box, Image, Text } from '@chakra-ui/react';

export default function ChatAddedUserItem({ user }: any) {
    const { avatar, login } = user;

    return (
        <Flex
            gap={5}
            p={5}
            cursor="pointer"
        >
            {user.avatar ? (
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

            <Text>{login}</Text>
        </Flex>
    );
}
