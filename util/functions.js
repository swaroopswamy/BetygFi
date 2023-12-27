import { getCookieByName } from "@util/cookieHelper";
import { AUTH_COOKIE_NAME } from "@util/utility";

export async function copyToClipboard(link) {
    let url = process.env.NEXT_PUBLIC_SITE_URL + "/" + link;
    try {
        await navigator.clipboard.writeText(url);
        /* Resolved - text copied to clipboard successfully */
    } catch (err) {
        console.error('Failed to copy: ', err);
        /* Rejected - text failed to copy to the clipboard */
    }
}


export function PublicAddressStringFormatter(name) {
    if (name?.startsWith("0x")) {
        return name?.split("")
            .join("")
            .substring(0, 6) + "..." + name?.slice(-5);
    } else {
        return name;
    }
}

export const getPublicAddress = () => {
    const authCookie = getCookieByName(AUTH_COOKIE_NAME);
    if (authCookie) {
        return PublicAddressStringFormatter(authCookie?.state?.public_address);
    } else {
        return undefined;
    }
};

export function getTokenFromLocal() {
    if (typeof window !== "undefined") {
        if (localStorage.getItem("verifiedState")) {
            const state = JSON.parse(localStorage.getItem("verifiedState"));
            return state?.state?.token;
        }
    }
}

export const getDomainForCookie = () => '.' + getMainDomain();

export const getMainDomain = () => {
    if (typeof window !== "undefined") {
        if (process.env.NEXT_PUBLIC_ENV === "production") {
            return window.location.hostname;
        } else {
            const host = window.location.hostname;
            const splittedHost = host.split(".");
            splittedHost.shift();
            return splittedHost.join(".");
        }
    } else {
        return "betygfi.com";
    }
};


