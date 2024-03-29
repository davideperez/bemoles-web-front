enum STORAGE_CONSTANTS {
  BEMOLES_TOKEN = "BEMOLES_TOKEN",
}

const getFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
};

const removeFromLocalStorage = (key: string): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

const setInLocalStorage = (key: string, value: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

export const getToken = () =>
  getFromLocalStorage(STORAGE_CONSTANTS.BEMOLES_TOKEN);
export const setToken = (token: string) =>
  setInLocalStorage(STORAGE_CONSTANTS.BEMOLES_TOKEN, token);
export const removeToken = () =>
  removeFromLocalStorage(STORAGE_CONSTANTS.BEMOLES_TOKEN);
