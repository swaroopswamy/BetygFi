export async function GET() {
    const res = await fetch(`http://54.178.13.3:4000/config/dashboard`, {
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store'
    });
    const data = await res.json();

    return Response.json({ data });
}