class MemoryStorage {
  static storage = {};

  static get(key) {
    return MemoryStorage.storage[key];
  }

  static set(key, value) {
    MemoryStorage.storage[key] = value;
  }

  static remove(key) {
    delete MemoryStorage.storage[key];
  }
}

export default MemoryStorage;
