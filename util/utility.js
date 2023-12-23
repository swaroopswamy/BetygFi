import { getCookieByName } from "@util/cookieHelper";
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import moment from "moment";

export const AUTH_COOKIE_NAME = "betygfi-auth";
export const COLOR_MODE_COOKIE_NAME = "bet-color";

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

// export const groupListByKey = (list, key) => Object.groupBy(list, ({ [key]: key_ }) => key_);
export const groupListByKey = (list, key) => groupBy(list, (value) => value[key]);

export const convertToInternationalCurrencySystem = labelValue => {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9
        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6
            ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3
                ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + " K"
                : Math.abs(Number(getToFixedValue(labelValue)));
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
    if (key == "tvl") {
        if (value) {
            return convertToInternationalCurrencySystem(value);
        } else {
            return null;
        }
    } else if (key == "mcap") {
        if (value) {
            return convertToInternationalCurrencySystem(value);
        } else {
            return null;
        }
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