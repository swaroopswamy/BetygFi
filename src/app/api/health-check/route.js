import { GET_LOCAL_SERVER_HOST } from "@util/utility";

export async function GET() {
    const getAppConfig = async () => {
        try {
            const res = await fetch(`${GET_LOCAL_SERVER_HOST()}/api/config`, { cache: 'no-store' });
            const data = await res.json();
            return data?.data?.config?.values?.NEXT_PUBLIC_API_URL;
        } catch (err) {
            return false;
        }
    };

    const checkBetygfi = async () => {
        try {
            const API_URL = await getAppConfig();
            const res = await fetch(`${API_URL}health/betygfi`, { cache: 'no-store' });
            const betygfiHealth = await res.json();
            return betygfiHealth.status;
        } catch (err) {
            return false;
        }
    };

    const checkLimitlessDB = async () => {
        try {
            const API_URL = await getAppConfig();
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
