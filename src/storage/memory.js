/**
 * App token info storage which uses memory
*/
export class MemoryStorage {
  /** @private */
  item = null;

  /**
   * Get app token info from variable
   * @returns {Object} App token info
   */
  static get() {
    return this.item;
  }

  /**
   * Set app token info in variable
   * @param {Object} value - App token info
   */
  static set(value) {
    this.item = value;
  }

  /**
   * Remove app token info from variable
   */
  static clear() {
    this.item = null;
  }
}

const appTokenStorage = new MemoryStorage();
export default appTokenStorage;
