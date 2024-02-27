export async function POST(req) {
    // try {
    const API_SERVICE_URL = process.env.API_SERVICE_URL;
    const URL = API_SERVICE_URL + (req.url.split("bet-dash"))[1];
    const payload = await req.formData();
    const fetchConfiguration = {
        method: 'POST',
        cache: 'no-store',
        body: payload
    };

    const res = await fetch(URL, fetchConfiguration);
    const data = await res.json();
    return Response.json(data);
    // } catch (error) {
    //   return Response.json({ error });
    // }
}