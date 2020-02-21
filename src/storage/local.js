/**
 * App token info storage which uses localStorage
*/
export class LocalStorage {
  constructor(key) {
    this.key = key;
  }

  /**
   * Gets app token info from the localStorage
   * @returns {Object} App token info
   */
  get() {
    const rawValue = localStorage.getItem(this.key);
    return JSON.parse(rawValue);
  }

  /**
   * Sets app token info into the localStorage
   * @param {Object} value - App token info
   */
  set(value) {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(this.key, rawValue);
  }

  /**
   * Remove app token info from the localStorage
   */
  clear() {
    localStorage.removeItem(this.key);
  }
}

export const appTokenStorage = new LocalStorage('svrf-app-token');
export const userTokenStorage = new LocalStorage('svrf-user-token');

export default appTokenStorage;
