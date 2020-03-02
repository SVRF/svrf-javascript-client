import storageLocal, {LocalStorage} from './local';
import memoryStorage, {MemoryStorage} from './memory';

const isMemoryStorage = typeof localStorage === 'undefined';

/** @constant Storage class for creating custom storage */
export const Storage = isMemoryStorage ? MemoryStorage : LocalStorage;

/** @constant {Storage} App token info storage */
const appTokenStorage = isMemoryStorage ? memoryStorage : storageLocal;

export default appTokenStorage;
