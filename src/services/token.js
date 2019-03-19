import getStorage from '../storages';

const APP_TOKEN = 'svrf-app-token';
const EXPIRATION_TIME = 'svrf-app-token-expiration-time';

class TokenService {
  static _instance;

  constructor() {
    if (TokenService._instance) {
      return TokenService._instance;
    }

    this.storage = getStorage();

    TokenService._instance = this;
  }

  getAppTokenInfo() {
    return {
      appToken: this.storage.get(APP_TOKEN),
      expirationTime: this.storage.get(EXPIRATION_TIME),
    };
  }

  setAppTokenInfo({appToken, expirationTime}) {
    this.storage.set(APP_TOKEN, appToken);
    this.storage.set(EXPIRATION_TIME, expirationTime);
  }

  clear() {
    this.storage.remove(APP_TOKEN);
    this.storage.remove(EXPIRATION_TIME);
  }
}

export default TokenService;
