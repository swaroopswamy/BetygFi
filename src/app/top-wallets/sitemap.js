import { BASE_URL } from "@util/constant";
import WhalesData from "@util/whales.json";

export default async function sitemap() {
    return WhalesData.whales.map((topWallet) => ({
        url: `${BASE_URL}/top-wallets/${topWallet?.id}`,
        lastModified: new Date(),
        changeFrequency: 'hourly',
        priority: 1,
    }));
}
