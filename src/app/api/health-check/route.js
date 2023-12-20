export const GET = async () => {
    const checkBetygfi = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}health/betygfi`, { cache: 'no-store' });
            const betygfiHealth = await res.json();
            return betygfiHealth.status;
        } catch (err) {
            return false;
        }
    };

    const checkLimitlessDB = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}health/limitlessdb`, { cache: 'no-store' });
            const limitLessDBHealth = await res.json();
            return limitLessDBHealth.status;
        } catch (err) {
            return false;
        }
    };

    const healthCheckBetygfi = await checkBetygfi();
    const healthCheckLimitless = await checkLimitlessDB();

    if (healthCheckBetygfi) {
        return new Response(healthCheckLimitless ? 'OK' : 'NOTOK');
    } else {
        return new Response("NOTOK");
    }
};
