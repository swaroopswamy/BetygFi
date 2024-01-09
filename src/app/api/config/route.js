export async function GET() {
    const fetchConfiguration = {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store'
    };
    const url = `http://65.2.78.115:4000/config/dashboard?env=${process.env.BUILD_ENV}`;
    const res = await fetch(url, fetchConfiguration);
    const data = await res.json();
    return Response.json({ data });
}