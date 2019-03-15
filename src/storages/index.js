import LocalStorage from './local-storage';
import MemoryStorage from './memory-storage';

/* eslint-disable-next-line import/no-mutable-exports */
let storage;

if (typeof localStorage === 'undefined') {
  storage = new MemoryStorage();
} else {
  storage = LocalStorage;
}

export default storage;
