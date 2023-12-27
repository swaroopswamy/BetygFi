/* eslint-disable react-hooks/rules-of-hooks */
const { useState, useEffect } = require("react");

const useNetwork = () => {
    if (typeof window !== "undefined") {
        const [isOnline, setNetwork] = useState(window.navigator.onLine);
        useEffect(() => {
            window.addEventListener("offline",
                () => setNetwork(window.navigator.onLine)
            );
            window.addEventListener("online",
                () => setNetwork(window.navigator.onLine)
            );
        });
        return isOnline;
    }
    return false;
};

export default useNetwork;