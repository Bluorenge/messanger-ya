import { useState, useEffect } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

interface HTMLRendererProps {
    html?: string;
    text?: string;
    className?: string;
    styles?: BoxProps;
}

export default function HTMLRenderer({ html, text, className, styles }: HTMLRendererProps) {
    const [parsedHtml, setParsedHtml] = useState<string>('');

    useEffect(() => {
        if (html) {
            const parseText = async () => {
                const parsedText = await marked.parse(html!);
                setParsedHtml(DOMPurify.sanitize(parsedText));
            };

            parseText();
        }
    }, [html]);

    const config = {
        ALLOWED_TAGS: ['b', 'a', 'strong', 'i', 'em', 'u', 'br'],
        ALLOWED_ATTR: ['href', 'title', 'target'],
    };

    return (
        <Box
            className={className}
            dangerouslySetInnerHTML={{
                __html: text ? DOMPurify.sanitize(text!, config) : parsedHtml,
            }}
            {...styles}
        />
    );
}
