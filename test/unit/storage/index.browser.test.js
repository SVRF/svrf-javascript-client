/**
 * @jest-environment jsdom
 */

import storage from '../../../src/storage';
import storageLocal from '../../../src/storage/local';

describe('Storage at the browser environment', () => {
  it('chooses local storage', () => {
    expect(storage).toEqual(storageLocal);
  });
});
