/**
 * @jest-environment node
 */

import Storage from '../../../src/storage';
import MemoryStorage from '../../../src/storage/memory';

describe('Storage at the server environment', () => {
  it('chooses memory storage', () => {
    expect(Storage).toEqual(MemoryStorage);
  });
});
