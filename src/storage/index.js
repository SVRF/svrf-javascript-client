import localStorage from './local';
import memoryStorage from './memory';

/** @constant {Storage} App token info storage */
const storage = typeof localStorage === 'undefined' ? memoryStorage : localStorage;

export default storage;
