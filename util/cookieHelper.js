import { setCookie, deleteCookie, getCookie } from 'cookies-next';
import { getDomainForCookie } from './functions';

const options = { domain: getDomainForCookie(), path: '/' };
export const getCookieByName = (cookieName) => {
    return getCookie(cookieName);
};

export const createCookies = (name, value) => {
    setCookie(name, value, options);
};

export const deleteCookieByName = (name) => {
    console.log('function called', name, getDomainForCookie());
    deleteCookie(name, options);
};
