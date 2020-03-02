/* eslint-disable no-new */

import Svrf from '../../../src/api';
import Validator from '../../../src/services/validator';
import MediaApi from '../../../src/api/media';
import TokenService from '../../../src/services/token';
import storage from '../../../src/storage';
import HttpClient from '../../../src/http/http-client';
import AppTokenHttpClient from '../../../src/http/app-token-http-client';

jest.mock('../../../src/services/validator');
jest.mock('../../../src/services/token');
jest.mock('../../../src/api/auth');
jest.mock('../../../src/http/http-client');
jest.mock('../../../src/http/app-token-http-client');

describe('Svrf', () => {
  const apiKey = 'key';

  it('sets all apis and methods', () => {
    const api = new Svrf(apiKey);

    expect(api.media).toBeInstanceOf(MediaApi);
    expect(api.authenticate).toBeDefined();
  });

  it('passes baseUrl to HttpClient', () => {
    const options = {isManualAuthentication: true, baseUrl: 'https://google.com'};
    new Svrf(apiKey, options);

    expect(HttpClient).toHaveBeenCalledWith({baseUrl: options.baseUrl});
  });

  it('passes all necessary params to AppTokenHttpClient', () => {
    const options = {isManualAuthentication: true, baseUrl: 'https://google.com'};
    const api = new Svrf(apiKey, options);

    expect(AppTokenHttpClient).toHaveBeenCalledWith(
      api.auth, expect.any(TokenService), {baseUrl: options.baseUrl},
    );
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

  describe('custom request', () => {
    const api = new Svrf(apiKey);

    const method = 'get';
    const url = 'https://google.com';
    const options = {query: {a: 1}};

    afterEach(() => {
      api.appTokenHttpClient.request.mockClear();
    });

    it('calls appTokenHttpClient by default with provided options', async () => {
      await api.request(method, url, options);

      expect(api.appTokenHttpClient.request).toHaveBeenCalledWith(method, url, options);
    });

    it('uses custom http client', async () => {
      const httpClient = {request: jest.fn()};
      await api.request(method, url, {...options, httpClient});

      expect(api.appTokenHttpClient.request).not.toHaveBeenCalled();
      expect(httpClient.request).toHaveBeenCalledWith(method, url, options);
    });
  });
});
