import Select, { Props as SelectProps } from 'react-select';
import { FlexProps } from '@chakra-ui/react';

import CustomControl from './ui/CustomControl';
import ClearIndicator from './ui/ClearIndicator';
import DropdownIndicator from './ui/DropdownIndicator';

type CustomSelectProps = SelectProps & {
    isInvalid?: boolean;
    customStyles?: {
        control?: FlexProps;
    };
};

export enum ActionTypes {
    Clear = 'clear',
    CreateOption = 'create-option',
    DeselectOption = 'deselect-option',
    PopValue = 'pop-value',
    RemoveValue = 'remove-value',
    SelectOption = 'select-option',
    SetValue = 'set-value',
}

export default function CustomSelect(props: CustomSelectProps) {
    return (
        <Select
            {...props}
            components={{
                ClearIndicator: (clearIndicatorProps) => <ClearIndicator {...clearIndicatorProps} />,
                DropdownIndicator: (dropdownIndicatorProps) => <DropdownIndicator {...dropdownIndicatorProps} />,
                Control: (controlProps) => (
                    <CustomControl
                        {...controlProps}
                        styles={props.customStyles?.control}
                    />
                ),
            }}
            styles={{
                container: (baseStyles, state) => ({
                    ...baseStyles,
                    width: '100%',
                    border: '2px solid',
                    borderColor: props.isInvalid ? 'var(--chakra-colors-red-500)' : 'var(--chakra-colors-green-400)',
                    borderRadius: '12px',
                    backgroundColor: '#fff',
                }),
                indicatorsContainer: (baseStyle, state) => ({
                    ...baseStyle,
                }),
            }}
        />
    );
}
