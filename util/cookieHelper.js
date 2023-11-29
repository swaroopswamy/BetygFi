import {  setCookie, deleteCookie, getCookie } from 'cookies-next';


export const getCookieByName = (cookieName) => {
    return getCookie(cookieName);
};

export const createCookies =  (name, value) => {
    setCookie(name, value);
};

export const deleteCookieByName =  (name) => {
    deleteCookie(null, name);
};
