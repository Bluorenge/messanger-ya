import { URLS } from '@/common/constants/global';
import { Button } from '@/components/ui/button';
import {
    DialogBackdrop,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { FETCH_METHODS, fetchData } from '@/shared/lib';
import { Box, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RiAddCircleLine } from 'react-icons/ri';
import useChats from './model/useChats';

interface Inputs {
    title: string;
}

export default function CreateChatBtn() {
    const { register, handleSubmit } = useForm<Inputs>();
    const [open, setOpen] = useState(false);
    const { getChats } = useChats();

    const onSubmit = async (data: Inputs) => {
        console.log(data);
        const response = await fetchData(URLS.CHATS, {
            method: FETCH_METHODS.POST,
            body: JSON.stringify(data),
        });

        if (response.reason) {
            console.log(response.reason);
        }

        if (response.id) {
            setOpen(false);
            getChats();
        }
    };

    return (
        <DialogRoot
            open={open}
            onOpenChange={(e) => setOpen(e.open)}
        >
            <DialogBackdrop />

            <DialogTrigger asChild>
                <Flex
                    asChild
                    cursor="pointer"
                    mx="auto"
                    w="30px"
                    h="30px"
                    _hover={{ opacity: 0.7 }}
                >
                    <RiAddCircleLine />
                </Flex>
            </DialogTrigger>

            <DialogContent asChild>
                <Box
                    as="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <DialogCloseTrigger />

                    <DialogHeader>
                        <DialogTitle>Create new chat</DialogTitle>
                    </DialogHeader>

                    <DialogBody>
                        <Input {...register('title')} />
                    </DialogBody>

                    <DialogFooter>
                        <Button type="submit">Create</Button>
                    </DialogFooter>
                </Box>
            </DialogContent>
        </DialogRoot>
    );
}
