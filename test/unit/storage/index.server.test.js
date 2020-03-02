/**
 * @jest-environment node
 */

import appTokenStorage, {Storage} from '../../../src/storage';
import memoryStorage, {MemoryStorage} from '../../../src/storage/memory';

describe('Storage at the server environment', () => {
  it('chooses memory storage', () => {
    expect(appTokenStorage).toEqual(memoryStorage);
  });

  it('chooses memory storage class', () => {
    expect(Storage).toEqual(MemoryStorage);
  });
});
