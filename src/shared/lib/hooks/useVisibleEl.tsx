'use client';

import { useEffect, useState } from 'react';

import { isElementPartiallyVisible } from '@/shared/lib';

export default function useVisibleEl(btnBlock: any) {
    const [isBlockVisible, setIsBlockVisible] = useState(false);

    useEffect(() => {
        const checkVisible = () => {
            if (isElementPartiallyVisible(btnBlock.current)) {
                if (!isBlockVisible) {
                    setIsBlockVisible(true);
                }
                return;
            }
            setIsBlockVisible(false);
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
