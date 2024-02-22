import { headers } from "next/headers";

export async function PUT(req) {
    const headersList = headers();
    const API_SERVICE_URL = process.env.API_SERVICE_URL;
    const URL = API_SERVICE_URL + (req.url.split("bet-dash"))[1];
    const payload = await req.formData();
    const authorization = headersList.get('authorization');

    const file = payload.get('profilePic');

    const formDataToSend = new FormData();
    formDataToSend.append('profilePic', file, file.name);

    const fetchConfiguration = {
        method: 'PUT',
        headers: { 'Authorization': authorization },
        cache: 'no-store',
        body: formDataToSend,
    };
    const res = await fetch(URL, fetchConfiguration);
    const data = await res.json();
    return Response.json(data);
}