import { headers } from 'next/headers';

export async function GET(req) {

    const headersList = headers();
    const API_SERVICE_URL = process.env.API_SERVICE_URL;
    const URL = API_SERVICE_URL + (req.url.split("bet-dash"))[1];
    const authorization = headersList.get('authorization');
    const fetchConfiguration = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorization,
        },
        cache: 'no-store'
    };
    const res = await fetch(URL, fetchConfiguration);

    if (res.ok) {
        const data = await res.json();
        return Response.json(data);
    } else {
        const errorData = await res.json();
        return new Response(JSON.stringify({ ...errorData }), { status: res.status });
    }

}