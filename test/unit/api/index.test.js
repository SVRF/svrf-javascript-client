/* eslint-disable no-new */

import Svrf from '../../../src/api';
import Validator from '../../../src/services/validator';
import MediaApi from '../../../src/api/media';
import TokenService from '../../../src/services/token';
import storage from '../../../src/storage';

jest.mock('../../../src/services/validator');
jest.mock('../../../src/services/token');
jest.mock('../../../src/api/media');
jest.mock('../../../src/api/auth');

describe('Svrf', () => {
  const apiKey = 'key';

  it('sets all apis and methods', () => {
    const api = new Svrf(apiKey);

    expect(api.media).toBeInstanceOf(MediaApi);
    expect(api.authenticate).toBeDefined();
  });

  describe('providing a storage', () => {
    it('validates storage if it is provided in options', () => {
      const mockStorage = {};

      new Svrf(apiKey, {storage: mockStorage});

      const keys = ['get', 'set', 'clear'];

      expect(Validator.validateObjectSchema).toHaveBeenCalledWith('User Storage', mockStorage, {
        allowedKeys: keys,
        requiredKeys: keys,
      });

      expect(TokenService).toHaveBeenCalledWith(mockStorage);
    });

    it('uses default storage if a storage is not provided', () => {
      new Svrf(apiKey);

      expect(TokenService).toHaveBeenCalledWith(storage);
    });
  });

  describe('providing an http client', () => {
    it('accepts a provided http client', () => {
      const mockClient = jest.fn();
      const s = new Svrf(apiKey, {client: mockClient});
      expect(s.httpClient).toBe(mockClient);
    });
  });

  describe('manual auth', () => {
    beforeEach(() => {
      jest.spyOn(Svrf.prototype, 'authenticate').mockResolvedValue();
    });

    afterEach(() => {
      Svrf.prototype.authenticate.mockRestore();
    });

    it('calls auth automatically if manual auth option is not provided', () => {
      const api = new Svrf(apiKey);

      expect(api.authenticate).toHaveBeenCalled();
    });

    it('does not call auth if the manual auth option is provided', () => {
      const api = new Svrf(apiKey, {isManualAuthentication: true});

      expect(api.authenticate).not.toHaveBeenCalled();
    });
  });
});
