import LocalStorage from './local-storage';
import MemoryStorage from './memory-storage';

const getStorage = () => {
  return typeof localStorage === 'undefined' ? new MemoryStorage() : new LocalStorage();
};

export default getStorage;
