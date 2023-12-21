import cache from "memory-cache";

export const cacheHandler = (url, response, hours = 4, forceRefresh) => {
    const cachedResponse = cache.get(url);
    if (cachedResponse && !forceRefresh) {
      return cachedResponse;
    } else {
      cache.del(url);
      cache.put(url, response, hours * 1000 * 60 * 60);
      return response;
    }
};

export const checkIfCacheAvailable = (url) => cache.get(url);