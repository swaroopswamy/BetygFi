export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const BUILD_ENV = searchParams.get("env");

    const getAppConfig = async () => {
        try {
            const url = `http://localhost:7000/api/config?env=${BUILD_ENV}`;
            const res = await fetch(url, { cache: 'no-store' });
            const data = await res.json();
            return data?.data?.config?.values?.NEXT_PUBLIC_API_URL;
        } catch (err) {
            return false;
        }
    };

    const checkBetygfi = async () => {
        try {
            const API_URL = await getAppConfig();
            const res = await fetch(`${API_URL}health/extra`, { cache: 'no-store' });
            return await res.json();
        } catch (err) {
            return { binary: '0000' };
        }
    };

    return new Response((await checkBetygfi()).binary);
}
