import { getConfigFromWebAdmin } from "@services/appService";

export async function GET() {
    const getAppConfig = async () => {
        try {
            const data = await getConfigFromWebAdmin();
            return data?.config?.API_SERVICE_URL;
        } catch (err) {
            return false;
        }
    };

    const API_URL = await getAppConfig();

    const checkBetygfi = async () => {
        try {
            const res = await fetch(`${API_URL}health/extra`, { cache: 'no-store' });
            return await res.json();
        } catch (err) {
            return { binary: '0000' };
        }
    };

    return new Response((await checkBetygfi()).binary);
}
