const fs = require('fs');
const VALID_KEY_LIST = ["NEXTAUTH_SECRET", "NEXTAUTH_URL_DASHBOARD", "CONFIG_SERVER_IP_HOST", "API_SERVICE_URL"];
const CONFIG_SERVER_IP_HOST = process.env.CONFIG_SERVER_IP_HOST;

const URL = `${CONFIG_SERVER_IP_HOST}/config`;

const getAppConfig = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log("🤦‍♀️🤷‍♂️🤔 ~ getAppConfig ~ data:", data);
        return data?.config;
    } catch (error) {
        return console.error("error in fetching config for dev", error);
    }
};

getAppConfig().then(result => {
    result.CONFIG_SERVER_IP_HOST = "http://52.66.250.16:4000";
    result.API_SERVICE_URL = "http://54.211.170.34:30268";
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