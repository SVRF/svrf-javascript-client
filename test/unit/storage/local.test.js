import LocalStorage from '../../../src/storage/local';

const testValueString = '{a: 1, b: "2"}';
const testValue = {a: 1, b: '2'};

describe('LocalStorage', () => {
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
    const value = LocalStorage.get();

    expect(value).toEqual(testValue);
    expect(JSON.parse).toHaveBeenCalledWith(testValueString);
    expect(localStorage.getItem).toHaveBeenCalledWith(LocalStorage.LOCAL_STORAGE_KEY);
  });

  it('sets value', () => {
    LocalStorage.set(testValue);

    expect(JSON.stringify).toHaveBeenCalledWith(testValue);
    expect(localStorage.setItem)
      .toHaveBeenCalledWith(LocalStorage.LOCAL_STORAGE_KEY, testValueString);
  });

  it('clears value', () => {
    LocalStorage.clear();

    expect(localStorage.removeItem).toHaveBeenCalledWith(LocalStorage.LOCAL_STORAGE_KEY);
  });
});
