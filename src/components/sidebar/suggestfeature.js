import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Box, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { postSuggestFeature } from "@/redux/app_data/dataSlice";
import { resetSuggestFeature } from "@/redux/app_data/dataSlice";
const CustomInput = dynamic(() => import('@components/customInput'));
const CustomUpload = dynamic(() => import('@components/customUpload'));
const CustomModal = dynamic(() => import("@components/custommodal/index"));
const SuggestFeatureModal = ({ isOpen, onOpen, onClose }) => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        userId: 123,
        featureName: "",
        description: "",
        image: null,
        emailId: ""
    });
    const statusSuggestFeature = useSelector(
        (state) => state?.appData?.suggestFeature
    );
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "image") {
            const selectedFile = e.target.files[0];
            setFormData((prevData) => ({
                ...prevData,
                [name]: selectedFile,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postSuggestFeature(formData));
    };
    return (
        <CustomModal
            state={statusSuggestFeature.status}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={() => {
                onClose();
                setFormData({
                    userId: 123,
                    featureName: "",
                    description: "",
                    file: null,
                    emailId: ""
                });
                dispatch(resetSuggestFeature());
            }}
            headerTitle={"Suggest a Feature"}
            BodyComponent={() => {
                return (
                    <Box layerStyle={"FlexColumnCenter"}>
                        <Box mb="30px">
                            <CustomInput
                                value={formData.featureName}
                                name="featureName"
                                label="Name of the Feature*"
                                type={"text"}
                                handleChange={handleChange}
                                placeholder={"Enter the name of the feature"}
                            ></CustomInput>
                        </Box>
                        <Box mb="30px">
                            <CustomInput
                                handleChange={handleChange}
                                value={formData.description}
                                name="description"
                                label="Tell us more about the feature*"
                                type={"textarea"}
                                placeholder={"Tell us more about the feature*"}
                            ></CustomInput>
                        </Box>

                        <Box mb="30px">
                            <CustomUpload
                                handleChange={handleChange}
                                name="image"
                                value={formData.file}
                            ></CustomUpload>
                        </Box>
                        <Box mb="30px">
                            <CustomInput
                                handleChange={handleChange}
                                value={formData.emailId}
                                name="emailId"
                                label="Your Contact (Email or Social handle)"
                                type={"text"}
                                placeholder={
                                    "Enter the details to contact you for reward"
                                }
                            ></CustomInput>
                        </Box>
                        <Box w={"100%"} layerStyle={"center"}>
                            <Button
                                as="submit"
                                onClick={handleSubmit}
                                variant={"submitModal"}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Box>
                );
            }}
        ></CustomModal>
    );
};

export default SuggestFeatureModal;
