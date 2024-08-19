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

export async function copyToClipboard(link) {
    let url = process.env.NEXT_PUBLIC_BETYGFI_URL + link;
    try {
        await navigator.clipboard.writeText(url);
        /* Resolved - text copied to clipboard successfully */
    } catch (err) {
        console.error('Failed to copy: ', err);
        /* Rejected - text failed to copy to the clipboard */
    }
}

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
/*         if (allowedPlatform.includes(url)) {
            return 'platform';
        } else */ if (allowedQA.includes(url)) {
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
};

export const ValidImgURL = (url) => {
    if (url) {
        if (url.split('/').includes('https:')) {
            return url;
        } else {
            return `/api/image/${encodeURIComponent(url)}`;
        }
    }
};

export const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateWebiste = (website) => {
    const regex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    return regex.test(website);
};

export const truncateText = (str, upto) => str && str.length > upto ? str.substring(0, upto) + "..." : str;

// eslint-disable-next-line no-unused-vars
export const renderSVG = (type, variation = null) => {
    if (type == "star") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M8.36067 1L10.6351 5.60778L15.7213 6.35121L12.041 9.93586L12.9096 15L8.36067 12.6078L3.81178 15L4.68034 9.93586L1 6.35121L6.08622 5.60778L8.36067 1Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        );
    } else if (type == "share") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M12.7213 5.33337C13.8259 5.33337 14.7213 4.43794 14.7213 3.33337C14.7213 2.2288 13.8259 1.33337 12.7213 1.33337C11.6168 1.33337 10.7213 2.2288 10.7213 3.33337C10.7213 4.43794 11.6168 5.33337 12.7213 5.33337Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.72134 10C5.82591 10 6.72134 9.10457 6.72134 8C6.72134 6.89543 5.82591 6 4.72134 6C3.61677 6 2.72134 6.89543 2.72134 8C2.72134 9.10457 3.61677 10 4.72134 10Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.7213 14.6666C13.8259 14.6666 14.7213 13.7712 14.7213 12.6666C14.7213 11.5621 13.8259 10.6666 12.7213 10.6666C11.6168 10.6666 10.7213 11.5621 10.7213 12.6666C10.7213 13.7712 11.6168 14.6666 12.7213 14.6666Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.44801 9.00671L11.0013 11.66" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.9947 4.33997L6.44801 6.9933" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        );
    } else if (type == "trending_up") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="#245F00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 6H23V12" stroke="#245F00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        );
    } else if (type == "trending_down") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_6937_7147)">
                    <path d="M15.3333 12L8.99999 5.66667L5.66666 9L0.666656 4" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.3333 12H15.3333V8" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_6937_7147">
                        <rect width="16" height="16" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        );
    } else if (type == "info") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_6937_5802)">
                    <path d="M7.99935 1.33464C4.31745 1.33464 1.33268 4.3194 1.33268 8.0013C1.33268 11.6832 4.31745 14.668 7.99935 14.668C11.6812 14.668 14.666 11.6832 14.666 8.0013C14.666 4.3194 11.6812 1.33464 7.99935 1.33464Z" stroke="#757575" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 10.668V8.0013" stroke="#757575" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 5.33203H7.99333" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_6937_5802">
                        <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 -1 16 16)" />
                    </clipPath>
                </defs>
            </svg>
        );
    } else if (type == "right-arrow") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z" fill={variation == "light" ? "#202020" : "#dfdfdf"} />
            </svg>
        );
    } else if (type == "download") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M14 10.4961V13.1628C14 13.5164 13.8595 13.8555 13.6095 14.1056C13.3594 14.3556 13.0203 14.4961 12.6667 14.4961H3.33333C2.97971 14.4961 2.64057 14.3556 2.39052 14.1056C2.14048 13.8555 2 13.5164 2 13.1628V10.4961" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.66602 7.16284L7.99935 10.4962L11.3327 7.16284" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 10.4961V2.49609" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        );
    } else if (type == "line-chart") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.08203 2.29175C2.08203 2.12599 2.01618 1.96702 1.89897 1.84981C1.78176 1.7326 1.62279 1.66675 1.45703 1.66675C1.29127 1.66675 1.1323 1.7326 1.01509 1.84981C0.897879 1.96702 0.832031 2.12599 0.832031 2.29175V17.7084C0.832031 18.0534 1.11203 18.3334 1.45703 18.3334H16.6654C16.8311 18.3334 16.9901 18.2676 17.1073 18.1504C17.2245 18.0331 17.2904 17.8742 17.2904 17.7084C17.2904 17.5427 17.2245 17.3837 17.1073 17.2665C16.9901 17.1493 16.8311 17.0834 16.6654 17.0834H2.08203V2.29175Z" fill={variation === "light" ? "white" : "black"} />
                <path d="M18.5667 6.48333C18.6771 6.36485 18.7372 6.20814 18.7343 6.04623C18.7315 5.88431 18.6659 5.72982 18.5514 5.61531C18.4368 5.5008 18.2824 5.43521 18.1204 5.43235C17.9585 5.42949 17.8018 5.48959 17.6833 5.59999L12.9167 10.3667L9.81667 7.26666C9.69948 7.14962 9.54063 7.08388 9.375 7.08388C9.20938 7.08388 9.05052 7.14962 8.93334 7.26666L3.93334 12.2667C3.87193 12.3239 3.82268 12.3929 3.78852 12.4695C3.75436 12.5462 3.73599 12.629 3.73451 12.7129C3.73303 12.7968 3.74847 12.8802 3.7799 12.958C3.81134 13.0358 3.85812 13.1065 3.91747 13.1659C3.97682 13.2252 4.04752 13.272 4.12534 13.3034C4.20316 13.3349 4.28652 13.3503 4.37044 13.3488C4.45436 13.3473 4.53712 13.329 4.61378 13.2948C4.69045 13.2607 4.75945 13.2114 4.81667 13.15L9.375 8.59166L12.475 11.6917C12.5922 11.8087 12.751 11.8744 12.9167 11.8744C13.0823 11.8744 13.2411 11.8087 13.3583 11.6917L18.5667 6.48333Z" fill={variation === "light" ? "white" : "black"} />
            </svg>
        );
    } else if (type == "candle-stick-chart") {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="material-symbols-light:candlestick-chart-rounded">
                    <path id="Vector" opacity="0.5" d="M5.85715 21.2857V19.1428H4.15429C3.82762 19.1428 3.55334 19.0324 3.33143 18.8114C3.10953 18.5905 2.99905 18.3162 3.00001 17.9886V6.02286C3.00001 5.68382 3.11048 5.40477 3.33143 5.18572C3.55239 4.96667 3.82667 4.85715 4.15429 4.85715H5.85715V2.71429C5.85715 2.51144 5.92572 2.34191 6.06286 2.20572C6.2 2.06953 6.37 2.00096 6.57286 2.00001C6.77572 1.99906 6.94524 2.06763 7.08143 2.20572C7.21762 2.34382 7.28572 2.51334 7.28572 2.71429V4.85715H8.98857C9.31524 4.85715 9.58952 4.96763 9.81143 5.18858C10.0333 5.40953 10.1438 5.68382 10.1429 6.01143V17.9786C10.1429 18.3176 10.0324 18.5962 9.81143 18.8143C9.59048 19.0324 9.31619 19.1419 8.98857 19.1428H7.28572V21.2857C7.28572 21.4886 7.21714 21.6581 7.08 21.7943C6.94286 21.9305 6.77286 21.999 6.57 22C6.36715 22.0009 6.19762 21.9324 6.06143 21.7943C5.92524 21.6562 5.85715 21.4867 5.85715 21.2857ZM15.8571 21.2857V15.4071H14.1543C13.8276 15.4071 13.5533 15.2967 13.3314 15.0757C13.1105 14.8538 13 14.5795 13 14.2529V8.59429C13 8.26667 13.1105 7.99238 13.3314 7.77143C13.5533 7.55048 13.8276 7.44 14.1543 7.44H15.8571V2.71429C15.8571 2.51144 15.9257 2.34191 16.0629 2.20572C16.2 2.06953 16.37 2.00096 16.5729 2.00001C16.7757 1.99906 16.9452 2.06763 17.0814 2.20572C17.2176 2.34382 17.2857 2.51334 17.2857 2.71429V7.44H18.9886C19.3162 7.44 19.5905 7.55048 19.8114 7.77143C20.0324 7.99238 20.1428 8.26667 20.1428 8.59429V14.2529C20.1428 14.5795 20.0324 14.8538 19.8114 15.0757C19.5905 15.2976 19.3162 15.4081 18.9886 15.4071H17.2857V21.2857C17.2857 21.4886 17.2171 21.6581 17.08 21.7943C16.9429 21.9305 16.7729 21.999 16.57 22C16.3671 22.0009 16.1976 21.9324 16.0614 21.7943C15.9252 21.6562 15.8571 21.4867 15.8571 21.2857Z" fill={variation === "light" ? "#FFFFFF" : "#16171B"} />
                </g>
            </svg>
        );
    } else if (type == "calendar") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z" stroke={variation === "light" ? "#FFFFFF" : "#16171B"} stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.668 1.33325V3.99992" stroke={variation === "light" ? "#FFFFFF" : "#16171B"} stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.33203 1.33325V3.99992" stroke={variation === "light" ? "#FFFFFF" : "#16171B"} stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 6.66663H14" stroke={variation === "light" ? "#FFFFFF" : "#16171B"} stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        );
    }
};