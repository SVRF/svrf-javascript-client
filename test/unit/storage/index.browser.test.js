/**
 * @jest-environment jsdom
 */

import appTokenStorage, {Storage} from '../../../src/storage';
import storageLocal, {LocalStorage} from '../../../src/storage/local';

describe('Storage at the browser environment', () => {
  it('chooses local storage', () => {
    expect(appTokenStorage).toEqual(storageLocal);
  });

  it('chooses local storage class', () => {
    expect(Storage).toEqual(LocalStorage);
  });
});
