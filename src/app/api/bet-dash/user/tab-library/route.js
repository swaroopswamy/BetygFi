// export async function POST(req) {
//     // try {
//     const API_SERVICE_URL = process.env.API_SERVICE_URL;
//     const URL = API_SERVICE_URL + (req.url.split("bet-dash"))[1];
//     const payload = await req.json();

//     const fetchConfiguration = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         cache: 'no-store',
//         body: JSON.stringify(payload),
//     };

//     const res = await fetch(URL, fetchConfiguration);
//     if (res.ok) {
//         const data = await res.json();
//         return Response.json(data);
//     } else {
//         const errorData = await res.json();
//         return new Response(JSON.stringify({ ...errorData }), { status: res.status });
//     }
// }

import { headers } from 'next/headers';

export async function POST(req) {
    // try {
    const headersList = headers();
    const authorization = headersList.get('authorization');
    const API_SERVICE_URL = process.env.API_SERVICE_URL;
    const URL = API_SERVICE_URL + (req.url.split("bet-comm"))[1];
    const payload = await req.json();

    const fetchConfiguration = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorization,
        },
        cache: 'no-store',
        body: JSON.stringify(payload),
    };

    const res = await fetch(URL, fetchConfiguration);
    const data = await res.json();
    return Response.json(data);
    // } catch (error) {
    //     return Response.json(error);
    // }
}