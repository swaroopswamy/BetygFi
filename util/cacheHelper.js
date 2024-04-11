import cache from "memory-cache";

export const cacheHandler = (url, response, forceRefresh, hours = 4) => {
  const cachedResponse = cache.get(url);
  if (cachedResponse && !forceRefresh) {
    return cachedResponse;
  } else {
    cache.del(url);
    setCacheToMemory(url, response, hours * 1000 * 60 * 60);
    return response;
  }
};

export const checkIfCacheAvailable = (url) => cache.get(url);

export const setCacheToMemory = (url, value, TTL = 9) => cache.put(url, value, TTL);

export const getAllCacheKeys = () => cache.keys();