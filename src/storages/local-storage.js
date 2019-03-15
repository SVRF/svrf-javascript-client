class LocalStorage {
  static get(key) {
    return localStorage.getItem(key);
  }

  static set(key, value) {
    localStorage.setItem(key, value);
  }

  static remove(key) {
    localStorage.removeItem(key);
  }
}

export default LocalStorage;
