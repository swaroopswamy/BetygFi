export async function GET() {
    // const res = await fetch(`http://65.2.78.115:4000/config/dashboard?env=${process.env.BUILD_ENV}`, {
    //     headers: { 'Content-Type': 'application/json' },
    //     cache: 'no-store'
    // });
    // const data = await res.json();
    const data = {
        "NEXT_PUBLIC_ENV": "development",
        "NEXT_PUBLIC_API_URL": "http://13.235.69.217:4000/",
        "GOOGLE_CLIENT_ID": "819863214659-mva6tg7nlktjm2separsfqfrjnnolpi7.apps.googleusercontent.com",
        "GOOGLE_CLIENT_SECRET": "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",
        "NEXTAUTH_SECRET": "secret",
        "NEXT_PUBLIC_BETYGFI_URL": "http://dev.betygfi.com",
        "NEXT_PUBLIC_STUDIO_URL": "http://devstudio.betygfi.com",
        "NEXT_PUBLIC_COMMUNITY_URL": "http://devcommunity.betygfi.com",
        "NEXTAUTH_URL": "http://dev.betygfi.com:3000"
    };
    return Response.json({ data });
}