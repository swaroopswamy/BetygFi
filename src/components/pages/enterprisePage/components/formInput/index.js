import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import React from 'react';

const CustomFormInput = ({ name, label, type, isRequired, placeholder, onChange }) => {
    return (
        <FormControl isRequired={isRequired} mb={"24px"} color={"#DADADA"}>
            <FormLabel>{label}</FormLabel>
            {
                type === "textarea" ?
                    <Textarea
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        color={"#FFFFFF"}
                        background={"rgba(255, 255, 255, 0.05)"}
                        border={"1px solid rgba(255, 255, 255, 0.2)"}
                        onChange={(e) => onChange(e)}

                    />
                    :
                    <Input
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        color={"#FFFFFF"}
                        background={"rgba(255, 255, 255, 0.05)"}
                        border={"1px solid rgba(255, 255, 255, 0.2)"}
                        onChange={(e) => onChange(e)}
                    />
            }

        </FormControl>
    );
};

export default CustomFormInput;