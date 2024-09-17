export async function GET(req) {
    let API_SERVICE_URL = process.env.API_SERVICE_URL;
    const splittedUrl = (req.url.split("bet-dash"))[1];
    if (splittedUrl.includes("sitemap=true")) {
        API_SERVICE_URL = "http://10.40.59.141:30268";
    }
    const URL = API_SERVICE_URL + splittedUrl;

    const fetchConfiguration = {
        headers: { 'Content-Type': 'application/json' },
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