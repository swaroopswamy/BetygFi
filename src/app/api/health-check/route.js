export async function GET() {
    const getAppConfig = async () => {
        try {
            const url = `http://localhost:${process.env.APP_PORT}/api/config`;
            const res = await fetch(url, { cache: 'no-store' });
            const data = await res.json();
            return data?.data?.config?.API_SERVICE_URL;
        } catch (err) {
            return false;
        }
    };

    const API_URL = await getAppConfig();

    const checkBetygfi = async () => {
        try {
            const res = await fetch(`${API_URL}health/betygfi`, { cache: 'no-store' });
            const betygfiHealth = await res.json();
            return betygfiHealth.status;
        } catch (err) {
            return false;
        }
    };

    const checkLimitlessDB = async () => {
        try {
            const res = await fetch(`${API_URL}health/limitlessdb`, { cache: 'no-store' });
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
}
