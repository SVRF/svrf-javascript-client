import MemoryStorage from '../../../src/storage/memory';

const testKey = 'value-key';
const testValue = {a: 1, b: '2'};

describe('MemoryStorage', () => {
  beforeEach(() => {
    MemoryStorage.storage = {};
  });

  it('gets value', () => {
    MemoryStorage.storage[testKey] = testValue;

    const value = MemoryStorage.get(testKey);
    expect(value).toEqual(testValue);
  });

  it('sets value', () => {
    MemoryStorage.set(testKey, testValue);

    const value = MemoryStorage.storage[testKey];
    expect(value).toEqual(testValue);
  });

  it('removes value', () => {
    MemoryStorage.storage[testKey] = testValue;

    MemoryStorage.remove(testKey);

    const value = MemoryStorage.storage[testKey];
    expect(value).not.toBeDefined();
  });
});
