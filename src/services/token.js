export default class TokenService {
  constructor(storage) {
    this.storage = storage;
  }

  isTokenValid() {
    const {appToken, expirationTime} = this.getInfoFromStorage();
    const isTokenValid = appToken && expirationTime && (expirationTime > Date.now());

    return !!isTokenValid;
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
