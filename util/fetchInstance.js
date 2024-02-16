export const fetchInstance = async ({ url, method, headers, payload }) => {
  if (!method) {
    method = 'GET';
  }
  const fetchConfiguration = {
    method: method,
    headers: { 'Content-Type': 'application/json', ...headers },
    cache: 'no-store',
  };
  if (payload) {
    fetchConfiguration.body = JSON.stringify(payload);
  }
  const result = await fetch(url, fetchConfiguration);
  return await result.json();
};
