import { setCookie, deleteCookie, getCookie } from 'cookies-next';
import { getDomainForCookie, getDomainForCookieAuth } from '@util/utility';

const options = () => { return ({ domain: getDomainForCookie(), path: '/' }); };
const optionsAuth = () => { return ({ domain: getDomainForCookieAuth(), path: '/' }); };


export const getCookieByName = (cookieName) => {
    const rawCookie = getCookie(cookieName);

    if (rawCookie !== undefined) {
        try {
            const parsedCookie = JSON.parse(rawCookie);
            return parsedCookie;
        } catch (error) {
            // If parsing fails, assume the cookie value is already an object
            return rawCookie;
        }
    }

    return undefined;
};

export const createCookies = (name, value) => {
    setCookie(name, value, options());
};

export const deleteCookieByName = (name) => {
    deleteCookie(name, options());
};


export const createCookiesAuth = (name, value) => {
    setCookie(name, value, optionsAuth());
};

export const deleteCookieByNameAuth = (name) => {
    deleteCookie(name, optionsAuth());
};


