// We should use instance methods because MemoryStorage and LocalStorage
// should implement the same interface.

/* eslint-disable class-methods-use-this */
class LocalStorage {
  get(key) {
    return localStorage.getItem(key);
  }

  set(key, value) {
    localStorage.setItem(key, value);
  }

  remove(key) {
    localStorage.removeItem(key);
  }
}

export default LocalStorage;
