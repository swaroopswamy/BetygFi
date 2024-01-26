import { getAppConfigMappedToGlobalEnv } from '@util/utility';
import absoluteUrl from 'next-absolute-url';

const CURRENT_PORTAL_NAME = 'dashboard';
const config = {
    localhost: {
        BUILD_ENV: "dev",
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
    const { host } = absoluteUrl(req);
    const hostWithoutPort = host => host.split(":")[0];
    const { searchParams } = new URL(req.url);
    const CONFIG_SERVER_IP_HOST = process.env.CONFIG_SERVER_IP_HOST || "http://52.66.250.16:4000";
    const BUILD_ENV = searchParams.get("env");

    const fetchConfiguration = {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store'
    };
    let url = '';
    if (BUILD_ENV) {
        url = `${CONFIG_SERVER_IP_HOST}/config/${CURRENT_PORTAL_NAME}/${BUILD_ENV}`;
        const res = await fetch(url, fetchConfiguration);
        const data = await res.json();
        return Response.json({ data });
    } else {
        const hostValue = hostWithoutPort(host);
        const hostedConfig = config[hostValue];
        url = `${CONFIG_SERVER_IP_HOST}/config/${hostedConfig['PORTAL_NAME']}/${hostedConfig['BUILD_ENV']}`;
        const res = await fetch(url, fetchConfiguration);
        const data = await res.json();
        const configValues = { ...data?.config?.values, ...hostedConfig };
        getAppConfigMappedToGlobalEnv(configValues);
        return Response.json({ data });
    }
}