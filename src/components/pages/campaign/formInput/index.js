import { FormControl, Input, Textarea } from '@chakra-ui/react';
import React from 'react';

const CustomFormInput = ({ name, type, isRequired, placeholder, onChange }) => {
    return (
        <FormControl isRequired={isRequired} mb={"24px"} color={"#DADADA"}>
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
                        resize={false}
                        _placeholder={{
                            color: "rgba(255, 255, 255, 0.60)",
                            fontSize: "16px",
                            fontFamily: "DM Sans",
                            fontWeight: 400,
                        }}

                    />
                    :
                    <Input
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        color={"#FFFFFF"}
                        background={"rgba(255, 255, 255, 0.05)"}
                        border={"1px solid rgba(255, 255, 255, 0.2)"}
                        _placeholder={{
                            color: "rgba(255, 255, 255, 0.60)",
                            fontSize: "16px",
                            fontFamily: "DM Sans",
                            fontWeight: 400,
                        }}
                        onChange={(e) => onChange(e)}
                    />
            }

        </FormControl>
    );
};

export default CustomFormInput;