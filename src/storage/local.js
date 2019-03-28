/**
 * App token info storage which uses localStorage
*/
class LocalStorage {
  static LOCAL_STORAGE_KEY = 'svrf-app-token';

  /**
   * Gets app token info from the localStorage
   * @returns {Object} App token info
   */
  static get() {
    const rawValue = localStorage.getItem(LocalStorage.LOCAL_STORAGE_KEY);
    return JSON.parse(rawValue);
  }

  /**
   * Sets app token info into the localStorage
   * @param {Object} value - App token info
   */
  static set(value) {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(LocalStorage.LOCAL_STORAGE_KEY, rawValue);
  }

  /**
   * Remove app token info from the localStorage
   */
  static clear() {
    localStorage.removeItem(LocalStorage.LOCAL_STORAGE_KEY);
  }
}

export default LocalStorage;
