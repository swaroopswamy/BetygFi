import { getAppConfigMappedToGlobalEnv } from '@util/utility';
import absoluteUrl from 'next-absolute-url';

const config = {
    localhost: {
        BUILD_ENV: "local",
        PORTAL_NAME: "dashboard",
        APP_PORT: "7000"
    },
    dev: {
        BUILD_ENV: "dev",
        PORTAL_NAME: "dashboard",
        APP_PORT: "7000"
    },
    qa: {
        BUILD_ENV: "qa",
        PORTAL_NAME: "dashboard",
        APP_PORT: "7000"
    },
    prod: {
        BUILD_ENV: "prod",
        PORTAL_NAME: "dashboard",
        APP_PORT: "7000"
    },
};

export async function GET(req) {
    const { protocol, origin } = absoluteUrl(req);
    const hostWithoutPort = (origin, protocol) => {
        const removedProtocol = origin.replace(protocol, '');
        const splittedOrigin = removedProtocol.split(":")[0].replace("//", "");
        return splittedOrigin;
    };
    const ADMINWEBURL = process.env.ADMINWEBURL || "http://52.66.250.16:4000/config";

    const fetchConfiguration = {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store'
    };
    const hostValue = hostWithoutPort(origin, protocol);
    let configuration = {};
    if (['localhost', 'dev', 'qa'].includes(hostValue)) {
        configuration = config[hostValue];
    } else {
        configuration = config['prod'];
    }
    const res = await fetch(ADMINWEBURL, fetchConfiguration);
    const data = await res.json();
    const configValues = { ...data?.config, ...configuration };
    getAppConfigMappedToGlobalEnv(configValues);
    return Response.json({ data });
}