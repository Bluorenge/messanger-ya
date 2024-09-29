import { Flex, Box, Image, Text } from '@chakra-ui/react';

export default function ChatAddedUserItem({ user, onClick, isSelected }: any) {
    const { avatar, login } = user;

    return (
        <Flex
            onClick={onClick}
            gap={5}
            p={5}
            bg={isSelected ? 'blue.700' : 'transparent'}
            cursor="pointer"
            _hover={{ bg: 'blue.500' }}
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
