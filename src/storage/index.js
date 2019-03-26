import LocalStorage from './local';
import MemoryStorage from './memory';

const storage = typeof localStorage === 'undefined' ? MemoryStorage : LocalStorage;

export default storage;
