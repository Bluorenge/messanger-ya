import { ReactNode } from 'react';
import { Flex, FlexProps, useCheckboxGroup } from '@chakra-ui/react';
import { useController } from 'react-hook-form';

import { CheckboxData } from '@/shared/models';
import { CustomCheckboxIcon } from '@/shared/ui';

interface CheckboxIconGroupProps {
    control: any;
    name: string;
    rules?: any;
    checkboxList: CheckboxData[];
    styles?: FlexProps;
    defaultValue?: string | undefined;
    CheckboxElement?: (props: any) => ReactNode;
}

export default function CheckboxGroup({
    control,
    name,
    rules,
    checkboxList,
    styles,
    defaultValue,
    CheckboxElement = CustomCheckboxIcon,
}: CheckboxIconGroupProps) {
    const { field } = useController({
        control,
        name,
        rules,
        defaultValue,
    });

    const { getCheckboxProps } = useCheckboxGroup({ ...field });

    return (
        <Flex {...styles}>
            {checkboxList.map((checkboxItem) => (
                <CheckboxElement
                    key={checkboxItem.value}
                    checkboxData={checkboxItem}
                    {...getCheckboxProps({ value: checkboxItem.value })}
                />
            ))}
        </Flex>
    );
}
