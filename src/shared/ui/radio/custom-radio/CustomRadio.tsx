import { forwardRef, ForwardedRef } from 'react';
import { Box, BoxProps, Flex, Img, RadioProps, Text, useRadio } from '@chakra-ui/react';

import { CheckboxData } from '@/shared/models';

type CustomRadioProp = {
    label: string;
    radioData: CheckboxData | string;
    variant: RadioVariants;
    styles?: BoxProps;
    onChange?: any; // * потому что у события плеера другой аргумент
} & Omit<RadioProps, 'onChange'>;

export enum RadioVariants {
    RadioInline = 'radio-inline',
    RadioQuiz = 'radio-quiz',
    RadioMenu = 'radio-menu',
}

const roundedIcon =
    "url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2020%2020%27%3E%3Cpath%20fill%3D%27%2373C371%27%20d%3D%27M10%2020C4.477%2020%200%2015.523%200%2010S4.477%200%2010%200s10%204.477%2010%2010-4.477%2010-10%2010zm0-2a8%208%200%201%200%200-16%208%208%200%200%200%200%2016z%27%2F%3E%3C%2Fsvg%3E')";
const roundedIconChecked =
    'url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2020%2020%27%3E%3Cpath%20fill%3D%27%2373C371%27%20d%3D%27M10%2020C4.477%2020%200%2015.523%200%2010S4.477%200%2010%200s10%204.477%2010%2010-4.477%2010-10%2010zm0-2a8%208%200%201%200%200-16%208%208%200%200%200%200%2016zm0-3a5%205%200%201%201%200-10%205%205%200%200%201%200%2010z%27%2F%3E%3C%2Fsvg%3E")';

const CustomRadio = forwardRef(
    ({ radioData, label, variant, styles, ...props }: CustomRadioProp, ref: ForwardedRef<unknown>) => {
        const { getInputProps, getRadioProps } = useRadio(props);

        const input = getInputProps({ ref });
        const radio = getRadioProps();
        const isQuizRadio = typeof radioData !== 'string' && variant === RadioVariants.RadioQuiz;

        return (
            <Box
                as="label"
                layerStyle={variant}
                cursor="pointer"
                {...styles}
                _hover={{
                    '.custom-radio-icon': {
                        bg: roundedIconChecked,
                    },
                }}
            >
                <input {...input} />

                <Flex align="center">
                    {isQuizRadio && radioData.icon && (
                        <Img
                            src={`/img/emoji/${radioData.icon}.png`}
                            alt={`icon-${radioData.value}`}
                            w="24px"
                            h="24px"
                            mr={2.5}
                        />
                    )}

                    {isQuizRadio && <Text as="span">{label}</Text>}

                    <Box
                        {...radio}
                        className="custom-radio-icon"
                        bg={roundedIcon}
                        _checked={{
                            bg: roundedIconChecked,
                        }}
                    />

                    {!isQuizRadio && <Text as="span">{label}</Text>}
                </Flex>
            </Box>
        );
    },
);

CustomRadio.displayName = 'CustomRadio';

export default CustomRadio;
