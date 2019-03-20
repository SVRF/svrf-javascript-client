import MemoryStorage from '../../../src/storage/memory';

const testValue = {a: 1, b: '2'};

describe('MemoryStorage', () => {
  beforeEach(() => {
    MemoryStorage.storage = {};
  });

  it('gets value', () => {
    MemoryStorage.appTokenInfo = testValue;

    const value = MemoryStorage.get();
    expect(value).toEqual(testValue);
  });

  it('sets value', () => {
    MemoryStorage.set(testValue);

    const value = MemoryStorage.appTokenInfo;
    expect(value).toEqual(testValue);
  });

  it('clears value', () => {
    MemoryStorage.appTokenInfo = testValue;

    MemoryStorage.clear();

    const value = MemoryStorage.appTokenInfo;
    expect(value).toBeFalsy();
  });
});
