export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const CONFIG_SERVER_IP_HOST = "http://52.66.250.16:4000";
    const BUILD_ENV = searchParams.get("env");
    const PORTAL_NAME = searchParams.get("portal");

    const fetchConfiguration = {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store'
    };
    const url = `${CONFIG_SERVER_IP_HOST}/config/${PORTAL_NAME}/${BUILD_ENV}`;
    const res = await fetch(url, fetchConfiguration);
    const data = await res.json();
    return Response.json({ data });
}