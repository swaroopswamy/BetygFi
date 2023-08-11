"use client"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    useEffect(() => {
        
        const updateDimension = () => {
            setScreenSize({
                width: window?.innerWidth,
                height: window?.innerHeight
            })
        }
        window.addEventListener('resize', updateDimension);


        return (() => {

            window.removeEventListener('resize', updateDimension);
        })

    }, [screenSize])
    return screenSize;
}

export default useScreenSize;