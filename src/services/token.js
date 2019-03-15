import storage from '../storages';

const APP_TOKEN = 'svrf-app-token';
const EXPIRATION_TIME = 'svrf-app-token-expiration-time';

class TokenService {
  static _instance;

  constructor() {
    if (TokenService._instance) {
      return TokenService._instance;
    }

    this.storage = storage;

    TokenService._instance = this;
  }

  isTokenExpired() {
    return this.storage.get(APP_TOKEN) && this.getExpirationTime() < new Date();
  }

  getAppToken() {
    return this.storage.get(APP_TOKEN);
  }

  setAppToken(appToken) {
    this.storage.set(APP_TOKEN, appToken);
  }

  getExpirationTime() {
    return this.storage.get(EXPIRATION_TIME);
  }

  setExpirationTime(expirationTime) {
    this.storage.set(EXPIRATION_TIME, expirationTime);
  }

  clear() {
    this.storage.remove(APP_TOKEN);
    this.storage.remove(EXPIRATION_TIME);
  }
}

export default TokenService;
