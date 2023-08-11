"use client"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({});

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize({
                width: window?.innerWidth,
                height: window?.innerHeight
            })
        }
        window && window.addEventListener('resize', updateDimension);


        return (() => {

            window && window.removeEventListener('resize', updateDimension);
        })

    }, [])
    return screenSize;
}

export default useScreenSize;