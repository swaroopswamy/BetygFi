import { getAppConfigMappedToGlobalEnv } from '@util/utility';
// import absoluteUrl from 'next-absolute-url';

// const config = {
//     // localhost: {
//     //     BUILD_ENV: "dev",
//     //     PORTAL_NAME: "dashboard",
//     //     APP_PORT: "7000"
//     // },
//     dev: {
//         BUILD_ENV: "dev",
//         PORTAL_NAME: "dashboard",
//         APP_PORT: "7000"
//     },
//     qa: {
//         BUILD_ENV: "qa",
//         PORTAL_NAME: "dashboard",
//         APP_PORT: "7000"
//     },
//     prod: {
//         BUILD_ENV: "prod",
//         PORTAL_NAME: "dashboard",
//         APP_PORT: "7000"
//     },
// };

export async function GET() {
    // const { host } = absoluteUrl(req);
    // const hostWithoutPort = host => host.split(":")[0];
    // const { searchParams } = new URL(req.url);
    // const BUILD_ENV = searchParams.get("env");
    const CONFIG_SERVER_IP_HOST = process.env.CONFIG_SERVER_IP_HOST;

    const fetchConfiguration = {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store'
    };
    let url = '';
    // if (BUILD_ENV) {
    //     url = `${CONFIG_SERVER_IP_HOST}/config`;
    //     const res = await fetch(url, fetchConfiguration);
    //     const data = await res.json();
    //     return Response.json({ data });
    // } else {
    // const hostValue = hostWithoutPort(host);
    // const hostedConfig = config[hostValue];
    url = `${CONFIG_SERVER_IP_HOST}/config`;
    const res = await fetch(url, fetchConfiguration);
    const data = await res.json();
    const configValues = { ...data?.config /* , ...hostedConfig */ };
    getAppConfigMappedToGlobalEnv(configValues);
    return Response.json({ data });
    // }
}