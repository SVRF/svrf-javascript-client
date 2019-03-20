class LocalStorage {
  static LOCAL_STORAGE_KEY = 'svrf-app-token';

  static get() {
    const rawValue = localStorage.getItem(LocalStorage.LOCAL_STORAGE_KEY);
    return JSON.parse(rawValue);
  }

  static set(value) {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(LocalStorage.LOCAL_STORAGE_KEY, rawValue);
  }

  static clear() {
    localStorage.removeItem(LocalStorage.LOCAL_STORAGE_KEY);
  }
}

export default LocalStorage;
