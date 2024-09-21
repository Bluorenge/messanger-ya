import { useState } from 'react';
import { useBoolean } from '@chakra-ui/react';

type FetchCallback<TArgs extends any[]> = (...args: TArgs) => Promise<void>;

export default function useLoadingTextWithFetch<TArgs extends any[]>(cb: FetchCallback<TArgs>) {
    const submittedFirstText = 'Submitting';
    const [isSubmitted, setIsSubmitted] = useBoolean(false);
    const [isSended, setIsSended] = useBoolean(false);
    const [loadingText, setLoadingText] = useState<string>(submittedFirstText);
    const [sendError, setSendError] = useState<string | null>(null);

    async function textedFetch(...args: TArgs) {
        setIsSubmitted.on();
        setSendError(null);

        const loadingTextTimerId = setTimeout(() => {
            setLoadingText('A little more time');
        }, 3000);

        try {
            await cb(...args);
            setIsSended.on();
        } catch (error) {
            setSendError('Something went wrong...');
            console.error('error: ', error);
        } finally {
            clearTimeout(loadingTextTimerId);
            setLoadingText(submittedFirstText);
            setIsSubmitted.off();
        }
    }

    return {
        loadingText,
        sendError,
        textedFetch,
        isSubmitted,
        isSended,
    };
}
