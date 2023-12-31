import { setCookie, deleteCookie, getCookie } from 'cookies-next';
import { getDomainForCookie } from '@util/utility';

const options = appConfig => { return ({ domain: getDomainForCookie(appConfig), path: '/' }); };

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

export const createCookies = (name, value, appConfig) => {
    setCookie(name, value, options(appConfig));
};

export const deleteCookieByName = (name, appConfig) => {
    deleteCookie(name, options(appConfig));
};

