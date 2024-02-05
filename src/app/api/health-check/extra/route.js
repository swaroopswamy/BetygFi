export async function GET() {
    const getAppConfig = async () => {
        try {
            const url = `http://localhost:7000/api/config`;
            const res = await fetch(url, { cache: 'no-store' });
            const data = await res.json();
            return data?.data?.config?.values?.API_SERVICE_URL;
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
