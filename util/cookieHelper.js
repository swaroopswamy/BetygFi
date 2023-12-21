import { setCookie, deleteCookie, getCookie } from 'cookies-next';
import { getDomainForCookie } from '@util/functions';

const options = () => { return ({ domain: getDomainForCookie(), path: '/' }); };

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

