/* eslint-disable no-case-declarations */
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

export const convertToInternationalCurrencySystem = (labelValue, fixedUpto = 2) => {
    const billion = (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(fixedUpto) + " B";
    const million = (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(fixedUpto) + " M";
    const thousand = (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(fixedUpto) + " K";
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
    } else if (type === "betygfi-logo") {
        return (
            <svg width="82" height="19" viewBox="0 0 82 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.5" cx="9.11111" cy="9.5552" r="9.11111" fill="#F0F0F5" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.17542 3.94385H10.8604C12.1197 3.94385 13.1203 4.96027 13.1203 6.18669V12.9988C13.1203 14.2485 12.0961 15.2416 10.8604 15.2416H7.36517C6.15273 15.2416 5.17542 14.2717 5.17542 13.0684C5.17542 11.8652 6.15273 10.8953 7.36517 10.8953H10.0041V12.4276H7.36517C7.00549 12.4276 6.71947 12.7115 6.71947 13.0684C6.71947 13.4254 7.00549 13.7093 7.36517 13.7093H10.8604C11.2529 13.7093 11.5762 13.3928 11.5762 12.9988V6.18669C11.5762 5.79715 11.2574 5.47622 10.8604 5.47622H6.71947V7.90016C6.71947 8.2897 7.03829 8.61062 7.43536 8.61062H10.0041V10.143H7.43536C6.17607 10.143 5.17542 9.12658 5.17542 7.90016V3.94385Z" fill="#757575" fill-opacity="0.5" />
                <g opacity="0.5">
                    <path d="M79.66 14.3519C79.66 14.6383 79.5662 14.8807 79.3786 15.0789C79.191 15.2662 78.9537 15.3598 78.6668 15.3598C78.3799 15.3598 78.1426 15.2662 77.955 15.0789C77.7674 14.8807 77.6736 14.6383 77.6736 14.3519V7.52797C77.6736 7.24157 77.7674 7.00474 77.955 6.81748C78.1426 6.61921 78.3799 6.52007 78.6668 6.52007C78.9537 6.52007 79.191 6.61921 79.3786 6.81748C79.5662 7.00474 79.66 7.24157 79.66 7.52797V14.3519ZM78.6502 5.44608C78.275 5.44608 78.0102 5.3855 77.8557 5.26433C77.7012 5.14316 77.6239 4.92837 77.6239 4.61994V4.306C77.6239 3.98656 77.7067 3.77176 77.8722 3.66161C78.0488 3.54044 78.3136 3.47986 78.6668 3.47986C79.053 3.47986 79.3234 3.54044 79.4779 3.66161C79.6324 3.78278 79.7097 3.99758 79.7097 4.306V4.61994C79.7097 4.93938 79.6269 5.15969 79.4614 5.28085C79.2958 5.39101 79.0254 5.44608 78.6502 5.44608Z" fill="#4682B4" fill-opacity="0.5" />
                    <path d="M69.701 15.3602C69.392 15.3602 69.1382 15.2666 68.9396 15.0793C68.7519 14.8811 68.6581 14.6387 68.6581 14.3523V4.80209C68.6581 4.51569 68.7519 4.27886 68.9396 4.0916C69.1382 3.89333 69.381 3.79419 69.6679 3.79419H75.0478C75.3348 3.79419 75.572 3.88782 75.7596 4.07508C75.9583 4.25132 76.0576 4.48264 76.0576 4.76904C76.0576 5.01138 75.9583 5.22617 75.7596 5.41343C75.572 5.60069 75.3348 5.69432 75.0478 5.69432H70.5784L70.7273 5.49605V8.81715L70.6115 8.60235H74.3029C74.5898 8.60235 74.8271 8.69598 75.0147 8.88324C75.2134 9.05949 75.3127 9.29081 75.3127 9.5772C75.3127 9.81954 75.2134 10.0343 75.0147 10.2216C74.8271 10.4089 74.5898 10.5025 74.3029 10.5025H70.5784L70.7273 10.3538V14.3523C70.7273 14.6387 70.6225 14.8811 70.4128 15.0793C70.2142 15.2666 69.9769 15.3602 69.701 15.3602Z" fill="#4682B4" fill-opacity="0.5" />
                    <path d="M61.6086 6.35669C62.0721 6.35669 62.4969 6.42829 62.8832 6.57149C63.2694 6.71469 63.6005 6.89644 63.8764 7.11674C64.1633 7.33705 64.3841 7.56286 64.5386 7.79418C64.7041 8.01449 64.7869 8.20175 64.7869 8.35596L64.3565 8.57076V7.36459C64.3565 7.07819 64.4503 6.84136 64.6379 6.6541C64.8255 6.45583 65.0628 6.35669 65.3497 6.35669C65.6366 6.35669 65.8739 6.45032 66.0615 6.63758C66.2491 6.82484 66.3429 7.06717 66.3429 7.36459V14.7173C66.3429 15.6756 66.1332 16.4412 65.7139 17.014C65.3055 17.5978 64.7648 18.0163 64.0916 18.2697C63.4184 18.5341 62.6956 18.6662 61.9231 18.6662C61.7024 18.6662 61.4154 18.6387 61.0623 18.5836C60.7092 18.5286 60.3726 18.4625 60.0525 18.3854C59.7325 18.3083 59.4897 18.2367 59.3242 18.1706C58.9931 18.0274 58.7614 17.8456 58.6289 17.6253C58.5075 17.416 58.4855 17.1902 58.5627 16.9479C58.662 16.6284 58.8221 16.4081 59.0428 16.287C59.2635 16.1768 59.4952 16.1658 59.738 16.2539C59.8484 16.287 60.0305 16.353 60.2843 16.4522C60.5381 16.5513 60.814 16.6394 61.112 16.7165C61.421 16.8047 61.6913 16.8487 61.9231 16.8487C62.7508 16.8487 63.3633 16.6835 63.7605 16.353C64.1578 16.0226 64.3565 15.5655 64.3565 14.9816V13.5442L64.5551 13.6929C64.5551 13.8361 64.4779 14.0123 64.3234 14.2216C64.1799 14.4199 63.9757 14.6181 63.7109 14.8164C63.4571 15.0147 63.1536 15.1854 62.8004 15.3286C62.4473 15.4608 62.0721 15.5269 61.6748 15.5269C60.8912 15.5269 60.185 15.3341 59.5559 14.9486C58.9269 14.552 58.4303 14.0123 58.0661 13.3294C57.7019 12.6354 57.5198 11.8423 57.5198 10.9501C57.5198 10.0468 57.7019 9.2537 58.0661 8.57076C58.4303 7.8768 58.9214 7.33705 59.5394 6.95151C60.1574 6.55496 60.8471 6.35669 61.6086 6.35669ZM61.9231 8.17421C61.4265 8.17421 60.9906 8.29538 60.6154 8.53771C60.2401 8.78005 59.9477 9.11051 59.738 9.52909C59.5283 9.94767 59.4235 10.4213 59.4235 10.9501C59.4235 11.4678 59.5283 11.9359 59.738 12.3545C59.9477 12.7731 60.2401 13.1035 60.6154 13.3459C60.9906 13.5882 61.4265 13.7094 61.9231 13.7094C62.4307 13.7094 62.8722 13.5882 63.2474 13.3459C63.6226 13.1035 63.915 12.7731 64.1247 12.3545C64.3344 11.9359 64.4392 11.4678 64.4392 10.9501C64.4392 10.4213 64.3344 9.94767 64.1247 9.52909C63.915 9.11051 63.6226 8.78005 63.2474 8.53771C62.8722 8.29538 62.4307 8.17421 61.9231 8.17421Z" fill="#757575" fill-opacity="0.5" />
                    <path d="M55.0354 6.5199C55.3223 6.5199 55.5596 6.61904 55.7472 6.81731C55.9348 7.00457 56.0286 7.2414 56.0286 7.52779V14.55C56.0286 15.5634 55.8355 16.3675 55.4492 16.9624C55.074 17.5682 54.5664 18.0033 53.9263 18.2677C53.2862 18.532 52.5689 18.6642 51.7743 18.6642C51.4212 18.6642 51.046 18.6367 50.6487 18.5816C50.2514 18.5265 49.9259 18.4439 49.672 18.3338C49.341 18.1906 49.1092 18.0088 48.9768 17.7885C48.8554 17.5792 48.8333 17.3534 48.9106 17.1111C49.0099 16.7916 49.1699 16.5713 49.3906 16.4502C49.6113 16.34 49.8431 16.329 50.0859 16.4171C50.2624 16.4722 50.4942 16.5548 50.7811 16.665C51.0681 16.7861 51.3991 16.8467 51.7743 16.8467C52.282 16.8467 52.7013 16.7751 53.0324 16.6319C53.3745 16.4997 53.6283 16.2684 53.7939 15.938C53.9704 15.6185 54.0587 15.1779 54.0587 14.6161V13.5091L54.4064 13.9056C54.2188 14.2691 53.9815 14.5721 53.6946 14.8144C53.4187 15.0457 53.0876 15.222 52.7013 15.3431C52.3151 15.4643 51.8737 15.5249 51.3771 15.5249C50.7922 15.5249 50.279 15.3927 49.8376 15.1283C49.4072 14.8529 49.0706 14.4784 48.8278 14.0048C48.585 13.5201 48.4636 12.9693 48.4636 12.3525V7.52779C48.4636 7.2414 48.5574 7.00457 48.745 6.81731C48.9326 6.61904 49.1699 6.5199 49.4568 6.5199C49.7438 6.5199 49.981 6.61904 50.1686 6.81731C50.3562 7.00457 50.4501 7.2414 50.4501 7.52779V11.7577C50.4501 12.4736 50.6046 12.9804 50.9136 13.2778C51.2336 13.5642 51.675 13.7074 52.2378 13.7074C52.6241 13.7074 52.9496 13.6358 53.2145 13.4926C53.4794 13.3383 53.6835 13.118 53.827 12.8316C53.9704 12.5342 54.0422 12.1762 54.0422 11.7577V7.52779C54.0422 7.2414 54.136 7.00457 54.3236 6.81731C54.5112 6.61904 54.7485 6.5199 55.0354 6.5199Z" fill="#757575" fill-opacity="0.5" />
                    <path d="M41.7876 6.68707H45.7108C45.9757 6.68707 46.1964 6.77519 46.3729 6.95143C46.5495 7.12768 46.6378 7.34798 46.6378 7.61235C46.6378 7.8657 46.5495 8.0805 46.3729 8.25674C46.1964 8.42197 45.9757 8.50459 45.7108 8.50459H41.7876C41.5227 8.50459 41.302 8.41646 41.1255 8.24022C40.9489 8.06397 40.8606 7.84367 40.8606 7.5793C40.8606 7.32595 40.9489 7.11666 41.1255 6.95143C41.302 6.77519 41.5227 6.68707 41.7876 6.68707ZM43.5588 4.6217C43.8458 4.6217 44.0775 4.72084 44.2541 4.91912C44.4417 5.10638 44.5355 5.3432 44.5355 5.6296V12.9823C44.5355 13.1365 44.5631 13.2632 44.6183 13.3623C44.6845 13.4615 44.7672 13.5331 44.8666 13.5771C44.9769 13.6212 45.0928 13.6432 45.2142 13.6432C45.3466 13.6432 45.468 13.6212 45.5784 13.5771C45.6887 13.522 45.8156 13.4945 45.9591 13.4945C46.1136 13.4945 46.2515 13.5661 46.3729 13.7093C46.5054 13.8525 46.5716 14.0508 46.5716 14.3041C46.5716 14.6125 46.4005 14.8659 46.0584 15.0642C45.7274 15.2625 45.3687 15.3616 44.9824 15.3616C44.7507 15.3616 44.4913 15.3451 44.2044 15.312C43.9285 15.268 43.6637 15.1743 43.4098 15.0311C43.1671 14.8769 42.9629 14.6456 42.7974 14.3372C42.6318 14.0287 42.5491 13.6047 42.5491 13.0649V5.6296C42.5491 5.3432 42.6429 5.10638 42.8305 4.91912C43.0291 4.72084 43.2719 4.6217 43.5588 4.6217Z" fill="#757575" fill-opacity="0.5" />
                    <path d="M36.0932 15.5269C35.1551 15.5269 34.3385 15.3341 33.6432 14.9486C32.959 14.552 32.4293 14.0178 32.0541 13.3459C31.6899 12.6739 31.5078 11.9139 31.5078 11.0657C31.5078 10.0743 31.7065 9.23167 32.1037 8.53771C32.5121 7.83273 33.0418 7.29299 33.6929 6.91847C34.344 6.54395 35.0337 6.35669 35.7621 6.35669C36.3249 6.35669 36.8546 6.47235 37.3512 6.70367C37.8589 6.93499 38.3058 7.25443 38.6921 7.662C39.0783 8.05855 39.3818 8.52119 39.6025 9.04992C39.8343 9.57865 39.9501 10.1404 39.9501 10.7353C39.9391 10.9996 39.8343 11.2144 39.6356 11.3797C39.437 11.5449 39.2052 11.6275 38.9404 11.6275H32.6169L32.1203 9.9752H38.1955L37.8313 10.3057V9.85954C37.8092 9.5401 37.6933 9.2537 37.4837 9.00035C37.285 8.747 37.0312 8.54873 36.7222 8.40553C36.4242 8.25131 36.1042 8.17421 35.7621 8.17421C35.431 8.17421 35.122 8.21827 34.8351 8.30639C34.5482 8.39451 34.2999 8.54322 34.0902 8.75251C33.8805 8.9618 33.715 9.24269 33.5936 9.59518C33.4722 9.94767 33.4115 10.3938 33.4115 10.9335C33.4115 11.5284 33.5329 12.0351 33.7757 12.4536C34.0295 12.8612 34.3495 13.1751 34.7358 13.3954C35.133 13.6047 35.5524 13.7094 35.9938 13.7094C36.4022 13.7094 36.7277 13.6763 36.9705 13.6102C37.2133 13.5441 37.4064 13.467 37.5499 13.3789C37.7044 13.2798 37.8423 13.1972 37.9637 13.1311C38.1624 13.0319 38.35 12.9824 38.5265 12.9824C38.7693 12.9824 38.968 13.065 39.1225 13.2302C39.288 13.3954 39.3708 13.5882 39.3708 13.8085C39.3708 14.1059 39.2163 14.3758 38.9073 14.6181C38.6203 14.8605 38.2175 15.0753 37.6989 15.2625C37.1802 15.4388 36.6449 15.5269 36.0932 15.5269Z" fill="#757575" fill-opacity="0.5" />
                    <path d="M26.4405 3.79419C27.5 3.79419 28.289 4.04203 28.8077 4.53772C29.3264 5.03341 29.5857 5.76592 29.5857 6.73527C29.5857 7.25298 29.4588 7.71012 29.205 8.10667C28.9512 8.4922 28.576 8.79512 28.0794 9.01542C27.5827 9.22471 26.9703 9.32936 26.2419 9.32936L26.3081 8.58583C26.6502 8.58583 27.042 8.6354 27.4834 8.73454C27.9249 8.82266 28.3497 8.98789 28.7581 9.23022C29.1774 9.46154 29.5195 9.792 29.7844 10.2216C30.0603 10.6402 30.1982 11.1799 30.1982 11.8408C30.1982 12.5678 30.0768 13.1627 29.834 13.6253C29.6023 14.088 29.2933 14.4459 28.907 14.6993C28.5208 14.9527 28.1069 15.1289 27.6655 15.228C27.2241 15.3162 26.7992 15.3602 26.3909 15.3602H22.269C21.9821 15.3602 21.7393 15.2666 21.5407 15.0793C21.3531 14.8811 21.2593 14.6387 21.2593 14.3523V4.80209C21.2593 4.51569 21.3531 4.27886 21.5407 4.0916C21.7393 3.89333 21.9821 3.79419 22.269 3.79419H26.4405ZM26.1426 5.74389H23.196L23.4112 5.47952V8.47017L23.2126 8.32146H26.1922C26.5123 8.32146 26.7992 8.21682 27.053 8.00753C27.3069 7.79824 27.4338 7.49532 27.4338 7.09877C27.4338 6.62511 27.3124 6.28364 27.0696 6.07435C26.8378 5.85404 26.5288 5.74389 26.1426 5.74389ZM26.275 10.2712H23.2623L23.4112 10.139V13.6253L23.2457 13.4601H26.3909C26.8985 13.4601 27.3013 13.3279 27.5993 13.0635C27.8973 12.7882 28.0462 12.3806 28.0462 11.8408C28.0462 11.3452 27.9469 10.9872 27.7483 10.7669C27.5496 10.5465 27.3124 10.4089 27.0365 10.3538C26.7606 10.2987 26.5068 10.2712 26.275 10.2712Z" fill="#757575" fill-opacity="0.5" />
                </g>
            </svg>
        );
    }
};

export const getLastnow = () => new Date(Date.now() - 0);
export const getLast7days = () => new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
export const getLast14days = () => new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);
export const getLast30days = () => new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
export const getLast1year = () => new Date(new Date().setFullYear(new Date().getFullYear() - 1));

export const filterTimestampsByPeriod = (timestamps, period) => {
    const periodMapping = {
        "7d": 7,
        "14d": 14,
        "30d": 30,
        "1yr": 365,
    };
    if (period == "Max") {
        return timestamps;
    } else {
        return timestamps && timestamps.slice(periodMapping[period] * -1);
    }
};

export const convertExpToNumber = n => {
    var sign = +n < 0 ? "-" : "",
        toStr = n.toString();
    if (!/e/i.test(toStr)) {
        return n;
    }
    var [lead, decimal, pow] = n.toString()
        .replace(/^-/, "")
        .replace(/^([0-9]+)(e.*)/, "$1.$2")
        .split(/e|\./);
    return +pow < 0 ?
        sign + "0." + "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal :
        sign + lead + (+pow >= decimal.length ? (decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0))) : (decimal.slice(0, +pow) + "." + decimal.slice(+pow)));
};

export const float2Ratio = (x) => {
    let tolerance = 1.e-4;
    let h1 = 1;
    let h2 = 0;
    let k1 = 0;
    let k2 = 1;
    let b = x;
    do {
        let a = Math.floor(b);
        let aux = h1;
        h1 = a * h1 + h2;
        h2 = aux;
        aux = k1;
        k1 = a * k1 + k2;
        k2 = aux;
        b = 1 / (b - a);
    } while (Math.abs(x - h1 / k1) > x * tolerance);

    return h1 + ":" + k1;
};

export const commasInThousands = x => x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

export const copyToClipboard_ = (text) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', text);
    document.body.appendChild(input);

    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

};

export const getCurrencyDetails = (currency, key) => {
    const currencyMappingObject = {
        "inr": {
            description: "Indian Rupee",
            locale: 'hi-IN',
            symbol: "₹"
        },
        "aud": {
            description: "Australian Dollar",
            locale: 'en-AU',
            symbol: "A$"
        },
        "cad": {
            description: "Canadian Dollar",
            locale: 'en-CA',
            symbol: "C$"
        },
        "cny": {
            description: "Chinese Yuan",
            locale: 'zh-CN',
            symbol: "CN¥"
        },
        "eur": {
            description: "Euro",
            locale: 'de-DE',
            symbol: "€"
        },
        "gbp": {
            description: "Pound Sterling",
            locale: 'en-GB',
            symbol: "£"
        },
        "jpy": {
            description: "Japanese Yen",
            locale: 'ja-JP',
            symbol: "¥"
        },
        "krw": {
            description: "South Korean Won",
            locale: 'ko-KR',
            symbol: "₩"
        },
        "rub": {
            description: "Russian Ruble",
            locale: 'ru-RU',
            symbol: "₽"
        },
        "usd": {
            description: "United States Dollar",
            locale: 'en-US',
            symbol: "$"
        }
    };
    return currencyMappingObject?.[currency]?.[key] || currency;
};