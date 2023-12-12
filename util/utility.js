import { getCookieByName } from "./cookieHelper";


export const AUTH_COOKIE_NAME = "betygfi-auth";
export const COLOR_MODE_COOKIE_NAME = "bet-color";

export const makeCapitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

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
