export default class TokenService {
  constructor(storage) {
    this.storage = storage;
  }

  isTokenValid() {
    const {appToken, expirationTime} = this.getInfoFromStorage();
    return appToken && expirationTime && (expirationTime > Date.now());
  }

  getAppToken() {
    const {appToken} = this.getInfoFromStorage();
    return appToken;
  }

  setAppTokenInfo({appToken, expiresIn}) {
    const expirationTime = Date.now() + expiresIn;

    this.storage.set({appToken, expirationTime});
  }

  clearAppTokenInfo() {
    this.storage.clear();
  }

  getInfoFromStorage() {
    return this.storage.get() || {};
  }
}
