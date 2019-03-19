import LocalStorage from '../../../src/storage/local';

const testKey = 'value-key';
const testValue = {a: 1, b: '2'};

describe('LocalStorage', () => {
  beforeEach(() => {
    jest.spyOn(localStorage, 'getItem').mockImplementation(() => {});
    jest.spyOn(localStorage, 'setItem').mockImplementation(() => {});
    jest.spyOn(localStorage, 'removeItem').mockImplementation(() => {});
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

    expect(localStorage.set).toHaveBeenCalledWith(testKey, testValue);
  });

  it('removes value', () => {
    LocalStorage.remove(testKey);

    expect(localStorage.set).toHaveBeenCalledWith(testKey);
  });
});
