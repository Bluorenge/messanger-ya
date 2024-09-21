import { Box, Collapse, Textarea } from '@chakra-ui/react';
import CustomCheckbox from './CustomCheckbox';

export default function CustomCheckboxTextarea({
    text,
    isInvalid,
    isChecked,
    onCheckboxChange,
    register,
}: {
    text: string;
    isInvalid?: boolean;
    isChecked: boolean;
    onCheckboxChange: (isChecked: boolean) => void;
    register: any;
}) {
    return (
        <>
            <Box
                cursor="pointer"
                _hover={{
                    '.chakra-checkbox__control': {
                        opacity: 0.7,
                    },
                }}
                onClick={() => {
                    onCheckboxChange(!isChecked);
                }}
            >
                <CustomCheckbox
                    checkboxProps={{ isChecked }}
                    styles={{ pointerEvents: 'none' }}
                    LabelEl={() => <>{text}</>}
                />
            </Box>
            <Collapse
                in={isChecked}
                animateOpacity
            >
                <Textarea
                    variant="simple"
                    placeholder="Enter your issue"
                    isInvalid={isInvalid}
                    {...register}
                />
            </Collapse>
        </>
    );
}
