/**
 * Service for token storage and validation
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
   * @returns {boolean} Is token valid or not
   */
  isTokenValid() {
    const {token, expiresAt} = this.getInfoFromStorage();
    const isTokenValid = token
      && expiresAt
      && (expiresAt > Date.now());

    return !!isTokenValid;
  }

  /**
   * Get token from storage
   * @returns {string} Token
   */
  getToken() {
    const {token} = this.getInfoFromStorage();
    return token;
  }

  /**
   * Set token info to storage
   * @param {{token: string, expiresAt: number}} tokenInfo - Token info
   */
  setTokenInfo({token, expiresAt}) {
    this.storage.set({token, expiresAt});
  }

  /**
   * Clear token info in storage
   */
  clearTokenInfo() {
    this.storage.clear();
  }

  /**
   * Get token info from storage
   * @returns {{token: string, expiresAt: number}} Token info
   */
  getInfoFromStorage() {
    return this.storage.get() || {};
  }
}

export default TokenService;
