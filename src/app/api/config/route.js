export async function GET() {
    const res = await fetch(`http://65.2.78.115:4000/config/dashboard?env=${process.env.BUILD_ENV}`, {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store'
    });
    const data = await res.json();

    return Response.json({ data });
}