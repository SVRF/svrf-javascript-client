const APP_TOKEN_KEY = 'svrf-app-token';
const EXPIRATION_TIME_KEY = 'svrf-app-token-expiration-time';

class TokenService {
  constructor(storage) {
    this.storage = storage;
  }

  isTokenExpired() {
    const appToken = this.getAppToken();
    const expirationTime = this.storage.get(EXPIRATION_TIME_KEY);

    return !appToken || !expirationTime || expirationTime < Date.now();
  }

  getAppToken() {
    return this.storage.get(APP_TOKEN_KEY);
  }

  setAppTokenInfo({appToken, expiresIn}) {
    const expirationTime = Date.now() + expiresIn;

    this.storage.set(APP_TOKEN_KEY, appToken);
    this.storage.set(EXPIRATION_TIME_KEY, expirationTime);
  }

  clearAppTokenInfo() {
    this.storage.remove(APP_TOKEN_KEY);
    this.storage.remove(EXPIRATION_TIME_KEY);
  }
}

export default TokenService;
