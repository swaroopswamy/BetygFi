import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CustomFormInput from "../formInput";

const CampaignPageSection6 = React.memo(() => {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        expectedMonthlyApiCalls: '',
        website: '',
        telegram: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    };
    return (
        <Box
            w="100%"
            bgImage={"/images/section_6_bg.svg"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            layerStyle={"center"}
            flexDir={"column"}
            py={"120px"}
        >
            <Box w="100" layerStyle={"flexColumn"} alignItems={"center"} mb="18px">
                <Text variant={"campaign_big_text"} color="#FFFFFF">
                    API Scholarship Program
                </Text>
            </Box>
            <Box mt="40px" layerStyle={"flexColumn"} w={{ xl: "546px", lg: "70%" }}>
                <CustomFormInput
                    isRequired={true}
                    placeholder={"Full name"}
                    type={"text"}
                    name="name"
                    onChange={handleInputChange}
                />
                <CustomFormInput
                    isRequired={true}
                    placeholder={"Email"}
                    type={"text"}
                    name="email"
                    onChange={handleInputChange}
                />
                <CustomFormInput
                    isRequired={true}
                    placeholder={"Expected monthly API calls*"}
                    type={"text"}
                    name="expectedMonthlyApiCalls"
                    onChange={handleInputChange}
                />
                <CustomFormInput
                    isRequired={true}
                    placeholder={"Website"}
                    type={"text"}
                    name="website"
                    onChange={handleInputChange}
                />
                <CustomFormInput
                    isRequired={true}
                    placeholder={"Telegram"}
                    type={"text"}
                    name="telegram"
                    onChange={handleInputChange}
                />
                <CustomFormInput
                    isRequired={true}
                    placeholder={"Tell us a little about your product"}
                    type={"textarea"}
                    name="message"
                    onChange={handleInputChange}
                />
                <Button variant={"ent_header_launch_button"} w="100%" borderRadius={"2px"} type="submit">
                    Get Your API Key
                </Button>
            </Box>
        </Box>
    );
});

CampaignPageSection6.displayName = "CampaignPageSection6";
export default CampaignPageSection6;