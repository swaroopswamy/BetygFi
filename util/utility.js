import { getCookieByName } from "@util/cookieHelper";
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import moment from "moment";
import { API_URL_COOKIE_NAME, AUTH_COOKIE_NAME, DOMAIN, LOCAL_DASHBOARD_HOST, LOCAL_SERVER_HOST } from "./constant";

export const makeCapitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const getTrendGraphFormattedDate = value => moment(value).format("MMM YY");

export const getAuthenticatedUserToken = () => {
    const authCookie = getCookieByName(AUTH_COOKIE_NAME);
    if (authCookie) {
        return authCookie?.state?.token;
    } else {
        return undefined;
    }
};

export const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
};

export const reloadSession = () => {
    const event = new Event("visibilitychange");
    if (typeof window !== "undefined") {
        document.dispatchEvent(event);
    }
};

export const groupListByKey_Pure = (list, key) => Object.groupBy(list, ({ [key]: key_ }) => key_);

export const groupListByKey = (list, key) => groupBy(list, (value) => value[key]);

export const convertToInternationalCurrencySystem = labelValue => {
    const billion = (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B";
    const million = (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M";
    const thousand = (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + " K";
    const lessThanThousand = Math.abs(Number(getToFixedValue(labelValue))) + "";
    const checkThousand = Math.abs(Number(labelValue)) >= 1.0e+3 ? thousand : lessThanThousand;
    const checkMillion = Math.abs(Number(labelValue)) >= 1.0e+6 ? million : checkThousand;
    return Math.abs(Number(labelValue)) >= 1.0e+9 ? billion : checkMillion;
};

export const getToFixedValue = (value, fixedUpto = 2) => {
    if (value) {
        if (value < 1) {
            const stringifiedValue = '' + value;
            const splittedValue = stringifiedValue.split("");
            const indexOfPeriod = splittedValue.indexOf(".");
            let uptoIndex = 0;
            for (let i = 0; i < splittedValue.length; i++) {
                if (i <= indexOfPeriod) {
                    continue;
                }
                const int = parseInt(splittedValue[i]);
                if (int < 1) {
                    continue;
                } else {
                    uptoIndex = i;
                    break;
                }
            }
            return parseFloat(splittedValue.slice(0, uptoIndex + fixedUpto).join(""));
        } else {
            return Number.parseFloat(value).toFixed(fixedUpto);
        }
    } else {
        return value;
    }
};

export const formatMCAPSearchTableString = (key, value) => {
    if (["mcap", "tvl"].includes(key)) {
        if (value) {
            return convertToInternationalCurrencySystem(value);
        } else {
            return null;
        }
    } else {
        return value;
    }
};

export const orderByKey = (list, key, orderby) => orderBy(list, [key], [orderby]);

export const calculateTimeDifference = (fromMilliseconds, toMilliseconds) => {
    let now = new Date();
    if (fromMilliseconds != null) {
        now = new Date(fromMilliseconds);
    }
    const then = new Date(toMilliseconds);
    const milliseconds = now.getTime() - then.getTime();

    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    return { hours, minutes, seconds };
};

export function PublicAddressStringFormatter(name) {
    if (name?.startsWith("0x")) {
        return name?.split("")
            .join("")
            .substring(0, 6) + "..." + name?.slice(-5);
    } else {
        return name;
    }
}

export const getDomainForCookie = () => '.' + getMainDomain();

export const getNonWWWDomain = () => {
    const host = window.location.hostname;
    const splittedHost = host.split(".");
    splittedHost.shift();
    return splittedHost.join(".");
};

export const getMainDomain = () => {
    if (typeof window !== "undefined") {
        if (getEnvironmentWiseConfig().isProd) {
            // if (process.env.PORTAL_NAME === 'dashboard') {
            return window.location.hostname;
            // } else {
            //     return getNonWWWDomain();
            // }
        } else {
            return getNonWWWDomain();
        }
    } else {
        return DOMAIN;
    }
};

export const USDollar = new Intl.NumberFormat('en-US');

export const calculatePercentage = (value, totalValue) => (value / totalValue) * 100;

export const getAPI_URL = () => getCookieByName(API_URL_COOKIE_NAME);

export const isNotNullAndUndefined = value => value !== null && value !== undefined;

export const GET_LOCAL_SERVER_HOST = () => {
    const APP_PORT = process.env.APP_PORT || 7000;
    const getHost = (isLocal) => {
        if (isLocal) {
            return LOCAL_DASHBOARD_HOST;
        } else {
            return LOCAL_SERVER_HOST;
        }
    };
    return `http://${getHost(getEnvironmentWiseConfig().isLocal)}:${APP_PORT}`;
    // return `http://${LOCAL_SERVER_HOST}:${APP_PORT}`;
};

export const getAppConfigMappedToGlobalEnv = appConfig => {
    for (const [key, value] of Object.entries(appConfig)) {
        process.env[key] = value;
    }
};

export const getEnvironmentWiseConfig = () => {
    const isLocal = process.env.NODE_ENV === "development" && process.env.BUILD_ENV === "local";
    const isDev = process.env.NODE_ENV === "development" && process.env.BUILD_ENV === "dev";
    const isQA = process.env.NODE_ENV === "qa" && process.env.BUILD_ENV === "qa";
    const isProd = process.env.NODE_ENV === "production" && process.env.BUILD_ENV === "prod";
    return { isLocal, isDev, isQA, isProd };
};