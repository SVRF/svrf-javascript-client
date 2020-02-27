/**
 * @jest-environment node
 */

import storage from '../../../src/storage';
import memoryStorage from '../../../src/storage/memory';

describe('Storage at the server environment', () => {
  it('chooses memory storage', () => {
    expect(storage).toEqual(memoryStorage);
  });
});
