import storage from '../storages';

const APP_TOKEN_KEY = 'svrf-app-token';
const EXPIRATION_TIME_KEY = 'svrf-app-token-expiration-time';

class TokenService {
  static _instance;

  constructor() {
    if (TokenService._instance) {
      return TokenService._instance;
    }

    this.storage = storage;

    TokenService._instance = this;
  }

  getAppTokenInfo() {
    return {
      appToken: this.storage.get(APP_TOKEN_KEY),
      expirationTime: this.storage.get(EXPIRATION_TIME_KEY),
    };
  }

  setAppTokenInfo({appToken, expirationTime}) {
    this.storage.set(APP_TOKEN_KEY, appToken);
    this.storage.set(EXPIRATION_TIME_KEY, expirationTime);
  }

  clearAppTokenInfo() {
    this.storage.remove(APP_TOKEN_KEY);
    this.storage.remove(EXPIRATION_TIME_KEY);
  }
}

export default TokenService;
