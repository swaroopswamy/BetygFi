"use client";
import React from "react";

export default function CoinDashboardPage({ params }) {
    const searchParamCoin = params?.coin_slug;

    return (
        <>
            <p>{searchParamCoin}</p>
        </>
    );
}
