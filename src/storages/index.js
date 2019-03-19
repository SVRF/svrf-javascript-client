import LocalStorage from './local';
import MemoryStorage from './memory';

const StorageClass = typeof localStorage === 'undefined' ? MemoryStorage : LocalStorage;

export default new StorageClass();
