/**
 * App token info storage which uses memory
*/
export class MemoryStorage {
  /** @private */
  data = null;

  /**
   * Get app token info from variable
   * @returns {Object} App token info
   */
  get() {
    return this.data;
  }

  /**
   * Set app token info in variable
   * @param {Object} value - App token info
   */
  set(value) {
    this.data = value;
  }

  /**
   * Remove app token info from variable
   */
  clear() {
    this.data = null;
  }
}

const appTokenStorage = new MemoryStorage();
export default appTokenStorage;
