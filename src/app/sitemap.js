import { BASE_URL } from "@util/constant";

export default function sitemap() {
    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/top-wallets`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/protocol`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/coin`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/approach-paper`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/help`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/legal`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/crypto-etfs-data-tracker`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.5,
        },
    ];
}
