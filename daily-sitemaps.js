/* eslint-disable no-console */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

async function fetchDataInSeries(urls) {
    for (const url of urls) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data from ${url}: ${response.status}`);
        }
        await response.text();
        console.log(`Data fetched from ${url}:`);
    }
}

const urls = [
    'https://devplatform.betygfi.com/coin/sitemap.xml',
    'https://devplatform.betygfi.com/protocol/sitemap.xml',
    'https://devplatform.betygfi.com/top-wallets/sitemap.xml',
    'https://devplatform.betygfi.com/crypto-etfs-data-tracker/sitemap.xml'
];

fetchDataInSeries(urls)
    .then(() => console.log('All data fetched successfully!'))
    .catch(error => console.error('Error:', error));