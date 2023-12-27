/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Box, Button } from "@chakra-ui/react";
import { categories } from "@util/constant";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchBlockchainListData,
    postReportBug,
    resetReportBug,
} from "@/redux/app_data/dataSlice";
const CustomInput = dynamic(() => import("@components/customInput"));
const CustomModal = dynamic(() => import("@components/custommodal/index"));
const CustomDropdown = dynamic(() => import("@components/dropdown/index"));
const ReportBugModal = ({ isOpen, onOpen, onClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        userId: 123,
        category: "",
        blockchain: "",
        defiCategory: "",
        bugReportUrl: "",
        description: "",
        emailId: "",
    });
    const categoriesOptions = categories.map((category) => {
        return { label: category.name, name: category.name };
    });
    const blockchainListData = useSelector(
        (state) => state?.appData?.BlockchainListData
    );
    const statusReportBug = useSelector((state) => state?.appData?.reportBug);
    const blockchainOptions = blockchainListData?.data?.map((blockchain) => {
        return { label: blockchain?.name, name: blockchain?.id };
    });
    const handleBlockchainSelect = (value) => {
        setFormData((prev) => ({
            ...prev,
            blockchain: value,
        }));
    };
    const handleCategorySelect = (value) => {
        setFormData((prev) => ({
            ...prev,
            category: value,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postReportBug(formData));
    };

    useEffect(() => {
        dispatch(fetchBlockchainListData());
    }, []);

    return (
        <CustomModal
            state={statusReportBug.status}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={() => {
                onClose();
                setFormData({
                    userId: 123,
                    category: "",
                    blockchain: "",
                    defiCategory: "",
                    bugReportUrl: "",
                    description: "",
                    emailId: "",
                });
                dispatch(resetReportBug());
            }}
            headerTitle={"Report Bug"}
            BodyComponent={() => {
                return (
                    <Box layerStyle={"FlexColumnCenter"}>
                        <Box mb="30px">
                            <CustomDropdown
                                selectedValue={formData.category}
                                onSelect={handleCategorySelect}
                                label="Category"
                                name="category"
                                options={categoriesOptions}
                                placeholder={"Select Category"}
                            ></CustomDropdown>
                        </Box>
                        <Box mb="30px">
                            <CustomDropdown
                                selectedValue={formData.blockchain}
                                options={blockchainOptions}
                                onSelect={handleBlockchainSelect}
                                label="Blockchain"
                                name="blockchain"
                                placeholder={"Select Blockchain"}
                            ></CustomDropdown>
                        </Box>
                        <Box mb="30px">
                            <CustomInput
                                handleChange={handleChange}
                                label="DeFi Category"
                                name={"defiCategory"}
                                value={formData.defiCategory}
                                type={"text"}
                                placeholder={"Enter the DeFi Category"}
                            ></CustomInput>
                        </Box>
                        <Box mb="30px">
                            <CustomInput
                                handleChange={handleChange}
                                name="bugReportUrl"
                                label="Bug Report URL"
                                type={"text"}
                                value={formData.bugReportUrl}
                                placeholder={
                                    "Enter the URL where the bug is reported"
                                }
                            ></CustomInput>
                        </Box>
                        <Box mb="30px">
                            <CustomInput
                                handleChange={handleChange}
                                value={formData.description}
                                name="description"
                                label="Please tell us about Bug e.g. DeFi Missing, Incorrect Data*"
                                type={"textarea"}
                                placeholder={"Breif about the bug"}
                            ></CustomInput>
                        </Box>{" "}
                        <Box mb="30px">
                            <CustomInput
                                handleChange={handleChange}
                                name={"emailId"}
                                value={formData.emailId}
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
                                variant={"submitModal"}
                                onClick={handleSubmit}
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

export default ReportBugModal;
