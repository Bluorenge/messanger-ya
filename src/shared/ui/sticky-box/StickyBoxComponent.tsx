import { BoxProps, HStack } from '@chakra-ui/react';
import StickyBox from 'react-sticky-box';

import { useVisibleEl } from '@/shared/lib';

interface StickyBoxComponentProps {
    btnObservedBlock: any;
    TextEl?: () => JSX.Element | null;
    BtnEl?: (props: { isTimed?: boolean; isSkipBtnShow?: boolean; onClickBtn?: () => void }) => JSX.Element;
    styles?: BoxProps;
}

export default function StickyBoxComponent({ TextEl, btnObservedBlock, BtnEl, styles }: StickyBoxComponentProps) {
    const { isBlockVisible: isTargetBlockVisible } = useVisibleEl(btnObservedBlock);

    return (
        <StickyBox
            offsetBottom={0}
            bottom
            style={{
                zIndex: 50,
            }}
        >
            <HStack
                opacity={isTargetBlockVisible ? '0' : '1'}
                visibility={isTargetBlockVisible ? 'hidden' : 'visible'}
                transition="all 0.25s ease-in-out"
                backgroundColor="white"
                px={5}
                py={2.5}
                mx={-5}
                gap={5}
                justify="space-between"
                mt={7.5}
                {...styles}
            >
                {TextEl && <TextEl />}
                {BtnEl && <BtnEl />}
            </HStack>
        </StickyBox>
    );
}
