import * as LocalStorage from './local';
import * as MemoryStorage from './memory';

/** @constant {Storage} App token info storage */
const storage = typeof localStorage === 'undefined' ? MemoryStorage : LocalStorage;

export default storage;
