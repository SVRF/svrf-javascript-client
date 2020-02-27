import {MemoryStorage} from '../../../src/storage/memory';

const testValue = {a: 1, b: '2'};

describe('MemoryStorage', () => {
  let storage;
  beforeEach(() => {
    storage = new MemoryStorage();
  });

  it('gets value', () => {
    storage.data = testValue;

    const value = storage.get();
    expect(value).toEqual(testValue);
  });

  it('sets value', () => {
    storage.set(testValue);

    const value = storage.data;
    expect(value).toEqual(testValue);
  });

  it('clears value', () => {
    storage.data = testValue;

    storage.clear();

    const value = storage.data;
    expect(value).toBeFalsy();
  });

  it('does not shares data between instances', () => {
    const anotherStorage = new MemoryStorage();
    const anotherTestValue = {another: 'test value'};

    storage.set(testValue);
    anotherStorage.set(anotherTestValue);

    expect(storage.get()).not.toEqual(anotherStorage.get());
  });
});
