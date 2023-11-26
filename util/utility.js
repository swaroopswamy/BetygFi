export const COLOR_MODE_COOKIE_NAME = "bet-color";

export const getMainDomain = () => {
    if (typeof window !== "undefined") {
        const host = window.location.hostname;
        const splittedHost = host.split(".");
        splittedHost.shift();
        return splittedHost.join(".");
    } else {
        return "betygfi.com";
    }
};

export const getDomainForCookie = () => '.' + getMainDomain();