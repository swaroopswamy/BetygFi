"use client";
import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CustomFormInput from "../formInput";

const BoxMap = () => {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        region: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const mailtoLink = `mailto:sid.rawat.sr2@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
            `Name: ${formValue.name}\nEmail: ${formValue.email}\nPhone: ${formValue.phone}\nCompany: ${formValue.company}\nJob Title: ${formValue.jobTitle}\nRegion: ${formValue.region}\nMessage: ${formValue.message}`
        )}`;

        window.location.href = mailtoLink;
    };


    return (
        <Box layerStyle={"center"} flexDir={"column"} pt="50px" id="get_in_touch">
            <Text variant={"ent_md_title"} mb="8px">
                Get In Touch
            </Text>
            <Text variant={"ent_subtitle"}>
                Any question or remarks? Just write us a message!
            </Text>
            <Box layerStyle={"flexCenter"} mt="60px" w="80%" gap={"60px"} as="form" onSubmit={handleSubmit}>
                <Box w="50%">
                    <iframe
                        title="google-map"
                        width="100%" height="720px" id="gmap_canvas"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.056505727119!2d77.6013085!3d12.968236099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1678b41def33%3A0xfe8ae8000ba8c87f!2sThe%20Ritz-Carlton%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1714753579387!5m2!1sen!2sin" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Box>
                <Box w="50%" layerStyle={"flexColumn"}>
                    <CustomFormInput
                        label={"Name"}
                        isRequired={true}
                        placeholder={"Enter your full name"}
                        type={"text"}
                        name="name"
                        onChange={handleInputChange}
                    />
                    <CustomFormInput
                        label={"Email"}
                        isRequired={true}
                        placeholder={"Enter your email ID"}
                        type={"text"}
                        name="email"
                        onChange={handleInputChange}
                    />
                    <CustomFormInput
                        label={"Phone Number"}
                        isRequired={false}
                        placeholder={"Enter your phone number"}
                        type={"text"}
                        name="phone"
                        onChange={handleInputChange}
                    />
                    <CustomFormInput
                        label={"Company"}
                        isRequired={true}
                        placeholder={"Enter the name of your company"}
                        type={"text"}
                        name="company"
                        onChange={handleInputChange}
                    />
                    <CustomFormInput
                        label={"Job Title"}
                        isRequired={true}
                        placeholder={"Enter your job title"}
                        type={"text"}
                        name="jobTitle"
                        onChange={handleInputChange}
                    />
                    <CustomFormInput
                        label={"Region"}
                        isRequired={true}
                        placeholder={"Enter region"}
                        type={"text"}
                        name="region"
                        onChange={handleInputChange}
                    />
                    <CustomFormInput
                        label={"Message"}
                        isRequired={true}
                        placeholder={"Write your questions or remarks"}
                        type={"textarea"}
                        name="message"
                        onChange={handleInputChange}
                    />
                    <Button variant={"ent_header_launch_button"} w="100%" borderRadius={"2px"} type="submit">
                        Send Message
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};


export default BoxMap;