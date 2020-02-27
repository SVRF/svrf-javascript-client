import {LocalStorage} from '../../../src/storage/local';

const testValueString = '{a: 1, b: "2"}';
const testValue = {a: 1, b: '2'};

describe('LocalStorage', () => {
  const key = 'local-storage-key';
  let storage;

  beforeAll(() => {
    // It's impossible to mock localStorage methods directly in the jsdom:
    // https://github.com/facebook/jest/issues/6798
    const localStorageProto = Object.getPrototypeOf(localStorage);
    jest.spyOn(localStorageProto, 'getItem').mockReturnValue(testValueString);
    jest.spyOn(localStorageProto, 'setItem').mockImplementation(() => {});
    jest.spyOn(localStorageProto, 'removeItem').mockImplementation(() => {});

    jest.spyOn(JSON, 'parse').mockReturnValue(testValue);
    jest.spyOn(JSON, 'stringify').mockReturnValue(testValueString);
  });

  beforeEach(() => { storage = new LocalStorage(key); });

  afterEach(() => {
    localStorage.getItem.mockClear();
    localStorage.setItem.mockClear();
    localStorage.removeItem.mockClear();

    JSON.parse.mockClear();
    JSON.stringify.mockClear();
  });

  afterAll(() => {
    localStorage.getItem.mockRestore();
    localStorage.setItem.mockRestore();
    localStorage.removeItem.mockRestore();

    JSON.parse.mockRestore();
    JSON.stringify.mockRestore();
  });

  it('gets value', () => {
    const value = storage.get();

    expect(value).toEqual(testValue);
    expect(JSON.parse).toHaveBeenCalledWith(testValueString);
    expect(localStorage.getItem).toHaveBeenCalledWith(key);
  });

  it('sets value', () => {
    storage.set(testValue);

    expect(JSON.stringify).toHaveBeenCalledWith(testValue);
    expect(localStorage.setItem)
      .toHaveBeenCalledWith(key, testValueString);
  });

  it('clears value', () => {
    storage.clear();

    expect(localStorage.removeItem).toHaveBeenCalledWith(key);
  });
});
