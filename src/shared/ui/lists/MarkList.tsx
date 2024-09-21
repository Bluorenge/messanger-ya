import { List, ListItem, Img, ListProps, ListItemProps } from '@chakra-ui/react';

import HTMLRenderer from '../html-renderer/HTMLRenderer';

interface MarkListProps {
    listData: string[];
    MarkEl?: () => JSX.Element;
    styles?: ListProps;
    listItemStyles?: ListItemProps;
}

export default function MarkList({ listData, MarkEl, styles, listItemStyles }: MarkListProps) {
    return (
        <List
            variant="default"
            {...styles}
        >
            {listData.map((text, index) => {
                return (
                    <ListItem
                        key={index}
                        display="flex"
                        flexDir="row"
                        gap={4}
                        {...listItemStyles}
                    >
                        {MarkEl ? (
                            <MarkEl />
                        ) : (
                            <Img
                                src="/img/emoji/mark.png"
                                alt="mark"
                                h="24px"
                                w="24px"
                            />
                        )}
                        <HTMLRenderer text={text} />
                    </ListItem>
                );
            })}
        </List>
    );
}
