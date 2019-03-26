/**
 * App token info storage which uses memory
*/
class MemoryStorage {
  /** @private */
  static appTokenInfo = null;

  /**
   * Get app token info from variable
   * @returns {Object} App token info
   */
  static get() {
    return MemoryStorage.appTokenInfo;
  }

  /**
   * Set app token info in variable
   * @param {Object} value - App token info
   */
  static set(value) {
    MemoryStorage.appTokenInfo = value;
  }

  /**
   * Remove app token info from variable
   */
  static clear() {
    MemoryStorage.appTokenInfo = null;
  }
}

export default MemoryStorage;
