import LocalStorage from '../../../src/storage/local';

const testKey = 'value-key';
const testValue = {a: 1, b: '2'};

describe('LocalStorage', () => {
  beforeEach(() => {
    // It's impossible to mock localStorage methods directly in the jsdom:
    // https://github.com/facebook/jest/issues/6798
    const localStorageProto = Object.getPrototypeOf(localStorage);
    jest.spyOn(localStorageProto, 'getItem').mockImplementation(() => {});
    jest.spyOn(localStorageProto, 'setItem').mockImplementation(() => {});
    jest.spyOn(localStorageProto, 'removeItem').mockImplementation(() => {});
  });

  afterEach(() => {
    localStorage.getItem.mockRestore();
    localStorage.setItem.mockRestore();
    localStorage.removeItem.mockRestore();
  });

  it('gets value', () => {
    localStorage.getItem.mockReturnValue(testValue);

    const value = LocalStorage.get(testKey);

    expect(value).toEqual(testValue);
    expect(localStorage.getItem).toHaveBeenCalledWith(testKey);
  });

  it('sets value', () => {
    LocalStorage.set(testKey, testValue);

    expect(localStorage.setItem).toHaveBeenCalledWith(testKey, testValue);
  });

  it('removes value', () => {
    LocalStorage.remove(testKey);

    expect(localStorage.removeItem).toHaveBeenCalledWith(testKey);
  });
});
