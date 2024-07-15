export async function POST(req) {
    // try {
    let API_SERVICE_URL = process.env.API_SERVICE_URL;
    const splittedUrl = (req.url.split("bet-dash"))[1];
    if (splittedUrl.includes("sitemap=true")) {
        API_SERVICE_URL = "http://10.40.59.141:30268";
    }
    const URL = API_SERVICE_URL + splittedUrl;
    const payload = await req.json();

    const fetchConfiguration = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
        body: JSON.stringify(payload),
    };

    const res = await fetch(URL, fetchConfiguration);
    const data = await res.json();
    return Response.json(data);
    // } catch (error) {
    //   return Response.json({ error });
    // }
}