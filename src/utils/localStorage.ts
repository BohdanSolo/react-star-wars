export const getLocalStore = (key: string) => {
  const data = localStorage.getItem(key);
  if (data !== null) {
    return JSON.parse(data);
  }
  return {};
};

export const setLocalStore = (key: string, data: string) => {
  localStorage.setItem(key, JSON.stringify(data));
};
