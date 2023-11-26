import { destroyCookie, parseCookies, setCookie } from 'nookies';

export const getCookieByName = (cookieName) => {
    const cookies = parseCookies();
    if (typeof cookies[cookieName] === 'object') {
        return JSON.parse(cookies[cookieName]);
    } else {
        return cookies[cookieName];
    }
};

export const createCookies = async (name, value, domain) => {
    setCookie(null, name, value, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
        domain: domain,
    });
};

export const deleteCookieByName = async (name, domain) => {
    destroyCookie(null, name, {
        domain: domain
    });
};
