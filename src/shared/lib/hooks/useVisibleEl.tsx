'use client';

import { useEffect } from 'react';
import { useBoolean } from '@chakra-ui/react';

import { isElementPartiallyVisible } from '@/shared/lib';

export default function useVisibleEl(btnBlock: any) {
    const [isBlockVisible, setIsBlockVisible] = useBoolean(false);

    useEffect(() => {
        const checkVisible = () => {
            if (isElementPartiallyVisible(btnBlock.current)) {
                if (!isBlockVisible) {
                    setIsBlockVisible.on();
                }
                return;
            }
            setIsBlockVisible.off();
        };

        if (btnBlock) {
            checkVisible();
            window.addEventListener('scroll', checkVisible);
        }

        return () => {
            window.removeEventListener('scroll', checkVisible);
        };
    }, [btnBlock]);

    return { isBlockVisible };
}
