const TOKEN_KEY = 'token';
export function setTokenToStorage(token) {
  window.localStorage.setItem(TOKEN_KEY, token);
}

export function getTokenFromStorage() {
  return window.localStorage.getItem(TOKEN_KEY);
}

export function deleteTokenFromStorage() {
  window.localStorage.removeItem(TOKEN_KEY);
}