import { getOrigin } from "@util/utility";
import { headers } from "next/headers";

export async function POST(req) {
    // try {
    const headersList = headers();

    const API_SERVICE_URL = process.env.API_SERVICE_URL;
    const URL = API_SERVICE_URL + (req.url.split("bet-dash"))[1];
    let origin = headersList.get('origin');
    if (origin === 'betygfi.com') {
        origin = 'www.betygfi.com';
    }
    const fetchConfiguration = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "origin": getOrigin(origin) },
        cache: 'no-store',
    };
    const res = await fetch(URL, fetchConfiguration);
    if (res.ok) {
        const data = await res.json();
        return Response.json(data);
    } else {
        const errorData = await res.json();
        return new Response(JSON.stringify({ ...errorData }), { status: res.status });
    }
    // } catch (error) {
    //   return Response.json({ error });
    // }
}