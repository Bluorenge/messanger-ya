import { Pagination as PaginationArk } from '@ark-ui/react';
import { Button, Center, HStack } from '@chakra-ui/react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

interface PaginationProps {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalCount, pageSize, onPageChange }: PaginationProps) {
    if (totalCount === 0 || totalCount <= pageSize) {
        return null;
    }

    return (
        <PaginationArk.Root
            count={totalCount}
            pageSize={pageSize}
            siblingCount={2}
            page={currentPage}
            onPageChange={(details) => onPageChange(details.page)}
        >
            <HStack
                justify="center"
                flexWrap={'wrap'}
            >
                <PaginationArk.PrevTrigger>
                    <Center
                        w="40px"
                        h="40px"
                        _hover={{
                            opacity: 0.7,
                        }}
                    >
                        <RiArrowLeftSLine size="24px" />
                    </Center>
                </PaginationArk.PrevTrigger>

                <PaginationArk.Context>
                    {(pagination) =>
                        pagination.pages.map((page, index) =>
                            page.type === 'page' ? (
                                <PaginationArk.Item
                                    key={index}
                                    {...page}
                                    asChild
                                >
                                    <Button variant="pagination">{page.value}</Button>
                                </PaginationArk.Item>
                            ) : (
                                <PaginationArk.Ellipsis
                                    key={index}
                                    index={index}
                                >
                                    &#8230;
                                </PaginationArk.Ellipsis>
                            ),
                        )
                    }
                </PaginationArk.Context>

                <PaginationArk.NextTrigger>
                    <Center
                        w="40px"
                        h="40px"
                        _hover={{
                            opacity: 0.7,
                        }}
                    >
                        <RiArrowRightSLine size="24px" />
                    </Center>
                </PaginationArk.NextTrigger>
            </HStack>
        </PaginationArk.Root>
    );
}
