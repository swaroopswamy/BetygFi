/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";

const Health = () => {
    const [health, setHealth] = useState("");
    const checkBetygfi = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}health/betygfi`);
            const betygfiHealth = await res.json();
            return betygfiHealth.status;
        } catch (err) {
            return false;
        }
    };

    const checkLimitlessDB = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}health/limitlessdb`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const limitLessDBHealth = await res.json();
            return limitLessDBHealth.status;
        } catch (err) {
            return false;
        }
    };
    useEffect(async () => {
        const healthCheckBetygfi = await checkBetygfi();
        const healthCheckLimitless = await checkLimitlessDB();
        if (healthCheckBetygfi) {
            setHealth(healthCheckLimitless ? 'OK' : 'NOTOK');
        } else {
            setHealth("NOTOK");
        }
    }, []);

    return (
        <p>{health}</p>
    );
};
export default Health;
