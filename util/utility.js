import { getCookieByName } from "./cookieHelper";


export const AUTH_COOKIE_NAME = "betygfi-auth";
export const COLOR_MODE_COOKIE_NAME = "bet-color";

export const makeCapitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const getAuthenticatedUserToken = () => {
    const authCookie = getCookieByName(AUTH_COOKIE_NAME);
    if (authCookie) {
        const parsedCookie = JSON.parse(authCookie);
        return parsedCookie?.state?.token;
    } else {
        return undefined;
    }
};

