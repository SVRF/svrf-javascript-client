import AppTokenHttpClient from '../../../src/http/app-token-http-client';
import AuthApi from '../../../src/api/auth';
import TokenService from '../../../src/services/token';

jest.mock('../../../src/api/auth');
jest.mock('../../../src/services/token');

describe('AppTokenHttpClient', () => {
  describe('request interceptor', () => {
    const request = {headers: {}};
    const token = 'token';
    const authApi = new AuthApi();
    const tokenService = new TokenService();

    beforeAll(() => {
      tokenService.getAppToken.mockReturnValue(token);
      const client = new AppTokenHttpClient(authApi, tokenService);

      client.api.interceptors.request.handlers.forEach((h) => h.fulfilled(request));
    });

    afterAll(() => {
      tokenService.getAppToken.mockReset();
    });

    it('invokes auth api authenticate method in request interceptor', () => {
      expect(authApi.authenticate).toHaveBeenCalled();
    });

    it('invokes token service getAppToken method in request interceptor', () => {
      expect(tokenService.getAppToken).toHaveBeenCalled();
    });

    it('puts x-app-token header', () => {
      expect(request.headers['x-app-token']).toEqual(token);
    });
  });
});
