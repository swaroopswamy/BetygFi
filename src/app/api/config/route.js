export async function GET() {
    const CONFIG_SERVER_IP_HOST = "http://65.2.78.115:4000";
    const BUILD_ENV = process.env.BUILD_ENV;
    const PORTAL_NAME = process.env.PORTAL_NAME;

    const fetchConfiguration = {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store'
    };
    const url = `${CONFIG_SERVER_IP_HOST}/config/${PORTAL_NAME}/${BUILD_ENV}`;
    const res = await fetch(url, fetchConfiguration);
    const data = await res.json();
    return Response.json({ data });
}