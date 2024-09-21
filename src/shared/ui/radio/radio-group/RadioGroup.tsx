import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { useController } from 'react-hook-form';
import { useRadioGroup, FlexProps, Flex, BoxProps } from '@chakra-ui/react';

import { CustomRadio, RadioVariants } from '@/shared/ui';
import { CheckboxData } from '@/shared/models';

interface RadioGroupProps {
    name: string;
    control: any;
    radioList: string[] | CheckboxData[];
    rules?: any;
    variant?: RadioVariants;
    defaultValue?: string | undefined;
    styles?: FlexProps;
    labelStyles?: BoxProps;
    CustomInputEl?: (props: any) => ReactNode;
    CustomInputEnd?: (props: any) => ReactNode;
}

const RadioGroup = forwardRef(
    (
        {
            control,
            name,
            radioList,
            rules,
            variant = RadioVariants.RadioQuiz,
            defaultValue,
            styles,
            labelStyles,
            CustomInputEl = (props) => {
                return <CustomRadio {...props} />;
            },
            CustomInputEnd,
        }: RadioGroupProps,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        const { field } = useController({
            control,
            name,
            rules,
            defaultValue,
        });

        const { getRootProps, getRadioProps } = useRadioGroup({
            ...field,
        });

        if (!radioList) {
            return null;
        }

        return (
            <Flex
                {...getRootProps()}
                {...styles}
            >
                {radioList.map((item: CheckboxData | string) => {
                    const value = typeof item === 'string' ? item : item.value;
                    const label = typeof item === 'string' ? item : item.label;

                    return (
                        <CustomInputEl
                            key={value}
                            radioData={item}
                            label={label}
                            variant={variant}
                            {...getRadioProps({ value })}
                            styles={{ ...labelStyles }}
                        />
                    );
                })}
                {CustomInputEnd && <CustomInputEnd props={{ ...getRadioProps({ value: 'other' }) }} />}
            </Flex>
        );
    },
);

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
