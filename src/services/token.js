/**
 * Service for token storage
*/
class TokenService {
  /**
   * @param {Storage} storage - Token storage
   */
  constructor(storage) {
    /** @private */
    this.storage = storage;
  }

  /**
   * Check is token in storage valid or not
   * @returns {Boolean} Is token valid or not
   */
  isTokenValid() {
    const {appToken, expirationTime} = this.getInfoFromStorage();
    const isTokenValid = appToken && expirationTime && (expirationTime > Date.now());

    return !!isTokenValid;
  }

  /**
   * Get app token from storage
   * @returns {String} App token
   */
  getAppToken() {
    const {appToken} = this.getInfoFromStorage();
    return appToken;
  }

  /**
   * Set app token info to storage
   * @param {{appToken: String, expiresIn: Number}} appTokenInfo - App token info
   */
  setAppTokenInfo({appToken, expiresIn}) {
    const expirationTime = Date.now() + expiresIn;

    this.storage.set({appToken, expirationTime});
  }

  /**
   * Clear app token info in storage
   */
  clearAppTokenInfo() {
    this.storage.clear();
  }

  /**
   * Get app token info from storage
   * @returns {{appToken: String, expirationTime: Number}|Object} App token info
   */
  getInfoFromStorage() {
    return this.storage.get() || {};
  }
}

export default TokenService;
