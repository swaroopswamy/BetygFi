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
    'https://platform.betygfi.com/coin/sitemap.xml',
    'https://platform.betygfi.com/protocol/sitemap.xml',
    'https://platform.betygfi.com/top-wallets/sitemap.xml',
    'https://platform.betygfi.com/crypto-etfs-data-tracker/sitemap.xml',
    "https://platform.betygfi.com/converter/sitemap.xml/1",
    "https://platform.betygfi.com/converter/sitemap.xml/2",
    "https://platform.betygfi.com/converter/sitemap.xml/3",
    "https://platform.betygfi.com/converter/sitemap.xml/4",
    "https://platform.betygfi.com/converter/sitemap.xml/5",
    "https://platform.betygfi.com/converter/sitemap.xml/6",
    "https://platform.betygfi.com/converter/sitemap.xml/7",
    "https://platform.betygfi.com/converter/sitemap.xml/8",
    "https://platform.betygfi.com/converter/sitemap.xml/9",
    "https://platform.betygfi.com/converter/sitemap.xml/10",
];

fetchDataInSeries(urls)
    .then(() => console.log('All data fetched successfully!'))
    .catch(error => console.error('Error:', error));