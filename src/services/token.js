export default class TokenService {
  constructor(storage) {
    this.storage = storage;
  }

  isTokenValid() {
    const {appToken, expirationTime} = this.storage.get();
    return appToken && expirationTime && (expirationTime > Date.now());
  }

  getAppToken() {
    const {appToken} = this.storage.get();
    return appToken;
  }

  setAppTokenInfo({appToken, expiresIn}) {
    const expirationTime = Date.now() + expiresIn;

    this.storage.set({appToken, expirationTime});
  }

  clearAppTokenInfo() {
    this.storage.clear();
  }
}
