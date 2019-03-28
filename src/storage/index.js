import LocalStorage from './local';
import MemoryStorage from './memory';

/** @constant {Storage} App token info storage */
const storage = typeof localStorage === 'undefined' ? MemoryStorage : LocalStorage;

export default storage;
