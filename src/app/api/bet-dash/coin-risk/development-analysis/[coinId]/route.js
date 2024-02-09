export async function GET(req) {
    try {
        const API_SERVICE_URL = process.env.API_SERVICE_URL;
        const URL = API_SERVICE_URL + (req.url.split("bet-dash"))[1];
        const fetchConfiguration = {
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-store'
        };
        const res = await fetch(URL, fetchConfiguration);
        const data = await res.json();
        return Response.json(data);
    } catch (error) {
        return Response.json(error);
    }
}