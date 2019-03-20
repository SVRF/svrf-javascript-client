export default class MemoryStorage {
  static appTokenInfo = null;

  static get() {
    return MemoryStorage.appTokenInfo;
  }

  static set(value) {
    MemoryStorage.appTokenInfo = value;
  }

  static clear() {
    MemoryStorage.appTokenInfo = null;
  }
}
