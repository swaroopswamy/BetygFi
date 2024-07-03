import { getCookieByName } from "@util/cookieHelper";
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import moment from "moment";
import { API_URL_COOKIE_NAME, AUTH_COOKIE_NAME, DOMAIN, LOCAL_FILE_PATH, LOCAL_SERVER_HOST, NTF_URL_COOKIE_NAME, SEARCH_TYPE_SELECTED } from "./constant";

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

export const createSearchGroupedData = searchListData => {
    const groupedData = groupListByKey(searchListData, 'type');
    let i = 0;
    if (groupedData?.defi) {
        groupedData.defi = JSON.parse(JSON.stringify([...groupedData.defi])).map(gd => {
            gd.searchIndex = i;
            // i++;
            return gd;
        });
    }

    if (groupedData?.coin) {
        groupedData.coin = JSON.parse(JSON.stringify([...groupedData.coin])).map(gd => {
            gd.searchIndex = i;
            // i++;
            return gd;
        });
    }

    if (groupedData?.wallet) {
        groupedData.wallet = JSON.parse(JSON.stringify([...groupedData.wallet])).map(gd => {
            gd.searchIndex = i;
            // i++;
            return gd;
        });
    }
    return groupedData;
};

export const setSearchSuggestionToStorage = (type, value) => {
    localStorage.setItem(SEARCH_TYPE_SELECTED, JSON.stringify({
        searchType: type,
        searchValue: value,
    }));
};

export const getSearchSuggestionToStorage = () => {
    return localStorage.getItem(SEARCH_TYPE_SELECTED);
};

export const clearSearchSuggestionToStorage = () => {
    return localStorage.removeItem(SEARCH_TYPE_SELECTED);
};

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

export const getDomainForCookie = () => "." + getMainDomain();

export const getMainDomain = () => {
    /* if (typeof window !== "undefined") {
        return window.location.hostname;
    } else { */
    return DOMAIN;
    //}
};

export const getDomainForCookieAuth = () => "." + getMainDomainAuth();
export const getMainDomainAuth = () => {
    /* if (typeof window !== "undefined") {
        return window.location.hostname.split('.').slice(-2).join('.');
    } else {
     */
    return DOMAIN;
    //}
};

export const USDollar = new Intl.NumberFormat('en-US');

export const calculatePercentage = (value, totalValue) => (value / totalValue) * 100;

export const getAPI_URL = () => getCookieByName(API_URL_COOKIE_NAME);
export const getNTF_API_URL = () => getCookieByName(NTF_URL_COOKIE_NAME);
export const isNotNullAndUndefined = value => value !== null && value !== undefined;

export const GET_LOCAL_SERVER_HOST = () => {
    const APP_PORT = process.env.APP_PORT || 7000;
    return `http://${LOCAL_SERVER_HOST}:${APP_PORT}`;
};

export const getAppConfigMappedToGlobalEnv = appConfig => {
    for (const [key, value] of Object.entries(appConfig)) {
        process.env[key] = value;
    }
};

export const replaceWithWS = (url) => {
    if (url) {
        // Check if the URL starts with http or https
        if (url.startsWith("http://")) {
            // Replace http with ws
            return url.replace('http', 'ws');
        } else if (url.startsWith("https://")) {
            // Replace https with ws
            return url.replace('https', 'wss');
        } else {
            // URL does not start with http or https
            return url;
        }
    }
};

export const getOrigin = url => {
    if (url) {
        const parsedUrl = new URL(url);
        return parsedUrl.hostname;
    } else {
        return 'betygfi.com';
    }
};

export const mapTypeObject = object => {
    let obj = {};
    for (const [key, value] of Object.entries(object)) {
        obj[key] = value === null ? 'null' : (value === undefined ? 'undefined' : typeof value);
    }
    return obj;
};

export const getEnv = (url) => {
    const allowedQA = ['qaplatform.betygfi.com', 'qacommunity.betygfi.com', 'qastudio.betygfi.com'];
    const allowedDev = ['devplatform.betygfi.com', 'devcommunity.betygfi.com', 'devstudio.betygfi.com'];
    const allowedLocal = ['localplatform.betygfi.com', 'localcommunity.betygfi.com', 'localstudio.betygfi.com'];
    const allowedKube = ['kubeplatform.betygfi.com', 'kubecommunity.betygfi.com', 'kubestudio.betygfi.com'];
    const allowedLocalhost = ['localhost:7000'];

    if (url) {
        if (allowedQA.includes(url)) {
            return 'qa';
        } else if (allowedDev.includes(url)) {
            return 'dev';
        } else if (allowedLocal.includes(url) || allowedLocalhost.includes(url)) {
            return 'local';
        } else if (allowedKube.includes(url)) {
            return 'kube';
        } else {
            return 'prod';
        }
    }
};

export const getHumanReadableTextFromSlug = value => {
    if (value.indexOf("-") > -1) {
        let string = '';
        const splittedValue = value.split("-");
        splittedValue.forEach(sv => {
            string += ' ' + capitalizeFirstLetter(sv);
        });
        return string;
    } else {
        return capitalizeFirstLetter(value);
    }
};

export const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);


export const ScrollToTable = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

export function convertENotationToNumber(num) {
    const str = num.toString();
    const match = str.match(/^(\d+)(\.(\d+))?[eE]([-\+]?\d+)$/);
    if (!match) return str; //number was not e notation or toString converted
    // we parse the e notation as (integer).(tail)e(exponent)
    const [, integer, , tail, exponentStr] = match;
    const exponent = Number(exponentStr);
    const realInteger = integer + (tail || '');
    if (exponent > 0) {
        const realExponent = Math.abs(exponent + integer.length);
        return realInteger.padEnd(realExponent, '0');
    } else {
        const realExponent = Math.abs(exponent - (tail?.length || 0));
        return '0.' + realInteger.padStart(realExponent, '0');
    }
}

export const getImageFilePath = (env) => {
    var filePath = '';
    if (env) {
        if (env === 'local') {
            filePath = LOCAL_FILE_PATH;
        } else {
            filePath = '/opt/statics';
        }
    }
    return filePath;
}

export const ValidImgURL = (url) => {
    if (url) {
        if (url.split('/').includes('https')) {
            return url;
        } else {
            return `/api/image/${encodeURIComponent(url)}`
        }
    }
}