import { NextResponse } from 'next/server';

export const GET = async () => {
    const checkBetygfi = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}health/betygfi`);
        const betygfiHealth = await res.json();
        return betygfiHealth.status;
    };

    const healthCheckBetygfi = await checkBetygfi();
    return NextResponse.json(healthCheckBetygfi ? 'ok' : 'not-ok');
};