/**
 * @jest-environment jsdom
 */

import Storage from '../../../src/storage';
import LocalStorage from '../../../src/storage/local';

describe('Storage at the browser environment', () => {
  it('chooses local storage', () => {
    expect(Storage).toEqual(LocalStorage);
  });
});
