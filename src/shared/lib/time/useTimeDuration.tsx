'use client';

import { useState } from 'react';

export default function useTimeDuration() {
    const [startTime, setStartTime] = useState(Date.now());

    const resetStartTime = () => {
        setStartTime(Date.now());
    };

    const getDuration = () => {
        const endTime = Date.now();
        const duration = (endTime - startTime) / 1000;
        return parseFloat(duration.toFixed());
    };

    return {
        resetStartTime,
        getDuration,
    };
}
