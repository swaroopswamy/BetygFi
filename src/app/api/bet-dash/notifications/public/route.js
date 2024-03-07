// import { headers } from 'next/headers';

export async function GET(req) {
    // try {
    // const headersList = headers();
    // const authorization = headersList.get('authorization');
    const NEXT_PUBLIC_SOCKET_HOST = process.env.NEXT_PUBLIC_SOCKET_HOST;
    const URL = NEXT_PUBLIC_SOCKET_HOST + (req.url.split("bet-dash"))[1];
    const fetchConfiguration = {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': authorization,
        },
        cache: 'no-store'
    };
    const res = await fetch(URL, fetchConfiguration);
    const data = await res.json();
    return Response.json(data);
    // } catch (error) {
    //     return Response.json(error);
    // }
}