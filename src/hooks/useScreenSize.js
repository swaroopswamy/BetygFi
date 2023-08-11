"use client"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function getCurrentDimension() {
    if (typeof window !== 'undefined') {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
}

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return (() => {

            window.removeEventListener('resize', updateDimension);
        })

    }, [screenSize])
    return screenSize;
}

export default useScreenSize;