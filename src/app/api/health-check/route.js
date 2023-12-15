import { NextResponse } from 'next/server';

export const GET = async () => {
    const checkBetygfi = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}health/betygfi`);
        const betygfiHealth = await res.json();
        return betygfiHealth.status;
    };

    const checkLimitlessDB = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}health/limitlessdb`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const limitLessDBHealth = await res.json();
        return limitLessDBHealth.status;
    };

    const healthCheckBetygfi = await checkBetygfi();
    const healthCheckLimitless = await checkLimitlessDB();

    if (healthCheckBetygfi) {
        return NextResponse.json(healthCheckLimitless ? 'ok' : 'not-ok');
    } else {
        return NextResponse.json("not-ok");
    }
};