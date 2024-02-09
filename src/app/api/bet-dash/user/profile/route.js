import { headers } from 'next/headers';

export async function GET(req) {
    try {
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
        const data = await res.json();
        return Response.json(data);
    } catch (error) {
        return Response.json(error);
    }
}