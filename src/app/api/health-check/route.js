export const GET = async () => {
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

    const healthCheckBetygfi = await checkBetygfi();
    const healthCheckLimitless = await checkLimitlessDB();

    if (healthCheckBetygfi) {
        return new Response(healthCheckLimitless ? 'ok' : 'not-ok');
    } else {
        return new Response("not-ok");
    }
};
