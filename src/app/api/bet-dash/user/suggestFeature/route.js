export async function POST(req) {
    const API_SERVICE_URL = process.env.API_SERVICE_URL;
    const URL = API_SERVICE_URL + (req.url.split("bet-dash"))[1];
    const payload = await req.json();

    const fetchConfiguration = {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        cache: 'no-store',
        body: JSON.stringify(payload),
    };

    const res = await fetch(URL, fetchConfiguration);
    const data = await res.json();
    return Response.json(data);
}