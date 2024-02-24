import absoluteUrl from 'next-absolute-url';

export async function GET(req) {
    const { protocol, origin } = absoluteUrl(req);
    const hostWithoutPort = (origin, protocol) => {
        const removedProtocol = origin.replace(protocol, '');
        const splittedOrigin = removedProtocol.split(":")[0].replace("//", "");
        return splittedOrigin;
    };
    const host = hostWithoutPort(origin, protocol);
    return Response.json({ host });
}