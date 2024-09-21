import { Box, BoxProps, Image, ImageProps } from '@chakra-ui/react';

export enum PictureType {
    Mobile = 'mobile',
    Simple = 'simple',
    Simple2x = 'simple-2x',
}

interface PictureProps {
    src: string;
    alt: string;
    type?: PictureType;
    minWidth?: string;
    desktopPostfix?: string;
    mobilePostfix?: string;
    pictureStyle?: BoxProps;
    imgStyle?: ImageProps;
}

const BASE_MIN_WIDTH = '992px';

export default function Picture({
    src,
    alt,
    type,
    minWidth = BASE_MIN_WIDTH,
    desktopPostfix = '-desktop',
    mobilePostfix = '-mobile',
    pictureStyle,
    imgStyle,
}: PictureProps) {
    const getExtension = (filename: string) => {
        return filename.split('.').pop() || '';
    };

    const getBaseName = (filename: string) => {
        return filename.substring(0, filename.lastIndexOf('.'));
    };

    const format = getExtension(src);
    const baseName = getBaseName(src);

    const generateSourceSet = (postfix: string, isRetina: boolean, format: string) => {
        return `/img/${baseName}${postfix}.${format} ${isRetina ? '2x' : '1x'}`;
    };

    if (type === PictureType.Simple) {
        return (
            <Box
                as="picture"
                {...pictureStyle}
            >
                <source
                    srcSet={`/img/${baseName}.webp`}
                    type="image/webp"
                />
                <Image
                    src={`/img/${src}`}
                    alt={alt}
                    {...imgStyle}
                />
            </Box>
        );
    }

    if (type === PictureType.Mobile) {
        return (
            <Box
                as="picture"
                {...pictureStyle}
            >
                <source
                    srcSet={`${generateSourceSet(mobilePostfix, false, 'webp')}, ${generateSourceSet(mobilePostfix + '@2x', true, 'webp')}`}
                    type="image/webp"
                />
                <Image
                    srcSet={`${generateSourceSet(mobilePostfix, false, format)}, ${generateSourceSet(mobilePostfix + '@2x', true, format)}`}
                    src={`/img/${baseName}${mobilePostfix}.${format}`}
                    alt={alt}
                    {...imgStyle}
                />
            </Box>
        );
    }

    if (type === PictureType.Simple2x) {
        return (
            <Box
                as="picture"
                {...pictureStyle}
            >
                <source
                    srcSet={`/img/${baseName}.webp 1x, /img/${baseName}@2x.webp 2x`}
                    type="image/webp"
                />
                <Image
                    srcSet={`/img/${baseName}.${format} 1x, /img/${baseName}@2x.${format} 2x`}
                    src={`/img/${baseName}.${format}`}
                    alt={alt}
                    {...imgStyle}
                />
            </Box>
        );
    }
    return (
        <Box
            as="picture"
            {...pictureStyle}
        >
            <source
                srcSet={`${generateSourceSet(desktopPostfix, false, 'webp')}, ${generateSourceSet(desktopPostfix + '@2x', true, 'webp')}`}
                media={`(min-width: ${minWidth})`}
                type="image/webp"
            />
            <source
                srcSet={`${generateSourceSet(desktopPostfix, false, format)}, ${generateSourceSet(desktopPostfix + '@2x', true, format)}`}
                media={`(min-width: ${minWidth})`}
                type={`image/${format}`}
            />
            <source
                srcSet={`${generateSourceSet(mobilePostfix, false, 'webp')}, ${generateSourceSet(mobilePostfix + '@2x', true, 'webp')}`}
                type="image/webp"
            />
            <Image
                srcSet={`${generateSourceSet(mobilePostfix, false, format)}, ${generateSourceSet(mobilePostfix + '@2x', true, format)}`}
                src={`/img/${baseName}${mobilePostfix}.${format}`}
                alt={alt}
                {...imgStyle}
            />
        </Box>
    );
}
