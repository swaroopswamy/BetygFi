import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { postCampaignUserData, resetPostCampaignUserData } from "@redux/app_data/dataSlice";
import { validateEmail } from "@util/utility";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const CustomToast = dynamic(() => import("@components/toast"), { ssr: false });
const CustomFormInput = dynamic(() => import("@/components/pages/campaign/formInput"), { ssr: false });
const CampaignPageSection6 = React.memo(({
    source,
    campaign,
    content,
    medium
}) => {

    const dispatch = useDispatch();
    const toast = useToast();
    const PostCampaignUserData = useSelector((state) => state?.appData?.PostCampaignUserData);

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        expectedMonthlyApiCalls: '',
        website: '',
        telegram: '',
        message: '',
        medium: medium,
        campaignId: campaign,
        adContent: content,
        source: source
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    };

    const validateForm = () => {
        const { name, email, expectedMonthlyApiCalls, website, message } = formValue;
        return name && email && expectedMonthlyApiCalls && website && message;
    };

    const validateEmailForm = () => validateEmail(formValue.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast({
                position: "bottom",
                render: () => (
                    <CustomToast
                        isSuccessful={false}
                        content={'Required field cannot be empty'}
                    />
                ),
            });
            return;
        }
        if (!validateEmailForm()) {
            toast({
                position: "bottom",
                render: () => (
                    <CustomToast
                        isSuccessful={false}
                        content={'Email is invalid'}
                    />
                ),
            });
            return;
        }
        dispatch(postCampaignUserData(formValue));
    };
    useEffect(() => {
        if (PostCampaignUserData.data !== null) {
            if (PostCampaignUserData.isSuccess) {
                toast({
                    position: "bottom",
                    render: () => (
                        <CustomToast
                            isSuccessful={true}
                            content={'Your details have been successfully submitted.'}
                        />
                    ),
                });
                setFormValue({
                    name: '',
                    email: '',
                    expectedMonthlyApiCalls: '',
                    website: '',
                    telegram: '',
                    message: '',
                    medium: medium,
                    campaignId: campaign,
                    adContent: content,
                    source: source
                });
            }
            if (PostCampaignUserData.isError) {
                toast({
                    position: "bottom",
                    render: () => (
                        <CustomToast
                            isSuccessful={false}
                            content={'Sorry! Please try again.'}
                        />
                    ),
                });
            }
            dispatch(resetPostCampaignUserData());

        }
    }, [PostCampaignUserData]);
    return (
        <Box
            w="100%"
            bgImage={{ base: "/images/section_6_base_bg.svg", lg: "/images/section_6_bg.svg" }}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            layerStyle={"center"}
            flexDir={"column"}
            py={{ base: "40px", lg: "120px" }}
            id="apply-form"
        >
            <Box w="100%" layerStyle={"flexColumn"} alignItems={"center"} mb="18px">
                <Text variant={"campaign_big_text"} color="#FFFFFF">
                    API Sponsorship Program
                </Text>
            </Box>
            <Box mt="40px" layerStyle={"flexColumn"} w={{ base: "100%", lg: "70%", xl: "546px" }} px={{ base: "16px", lg: "0px" }}>
                <CustomFormInput
                    value={formValue.name}
                    isRequired={true}
                    placeholder={"Full name*"}
                    type={"text"}
                    name="name"
                    onChange={handleInputChange}
                />
                <CustomFormInput
                    value={formValue.email}
                    isRequired={true}
                    placeholder={"Email*"}
                    type={"email"}
                    name="email"
                    onChange={handleInputChange}
                />
                <CustomFormInput
                    value={formValue.expectedMonthlyApiCalls}
                    isRequired={true}
                    placeholder={"Expected monthly API calls*"}
                    type={"number"}
                    name="expectedMonthlyApiCalls"
                    onChange={handleInputChange}
                />
                <CustomFormInput
                    value={formValue.website}
                    isRequired={true}
                    placeholder={"Website*"}
                    type={"text"}
                    name="website"
                    onChange={handleInputChange}
                />
                <CustomFormInput
                    value={formValue.telegram}
                    isRequired={false}
                    placeholder={"Telegram"}
                    type={"text"}
                    name="telegram"
                    onChange={handleInputChange}
                />
                <CustomFormInput
                    value={formValue.message}
                    isRequired={false}
                    placeholder={"Tell us a little about your product.*"}
                    type={"textarea"}
                    name="message"
                    onChange={handleInputChange}
                />
                <Button variant={"ent_header_launch_button"} w="100%" borderRadius={"2px"} type="submit" onClick={(e) => { handleSubmit(e); }}>
                    Get Your API Key
                </Button>
            </Box>
        </Box>
    );
});

CampaignPageSection6.displayName = "CampaignPageSection6";
