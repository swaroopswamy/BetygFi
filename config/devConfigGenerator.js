const fs = require('fs');
const VALID_KEY_LIST = ["NEXTAUTH_SECRET", "NEXTAUTH_URL_DASHBOARD", "ADMINWEBURL", "API_SERVICE_URL"];
const ADMINWEBURL = process.env.ADMINWEBURL || "http://52.66.250.16:4000";

const URL = `${ADMINWEBURL}`;

const getAppConfig = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data?.config;
    } catch (error) {
        return console.error("error in fetching config for dev", error);
    }
};

getAppConfig().then(result => {
    let modifiedData = '';
    for (const [key, value] of Object.entries(result)) {
        if (VALID_KEY_LIST.includes(key)) {
            modifiedData += key + '="' + value + '"';
            modifiedData += "\n";
        }
    }
    fs.appendFileSync('.env', modifiedData, { flag: 'w' }, function (err) {
        if (err) {
            return console.error(err);
        }
    });
});