import AttachHeaderService from '../../../src/http/app-token-http-client';
import AuthApi from '../../../src/api/auth';
import TokenService from '../../../src/services/token';

jest.mock('../../../src/api/auth');
jest.mock('../../../src/services/token');

describe('AttachHeaderService', () => {
  describe('request interceptor', () => {
    const token = 'token';
    const authApi = new AuthApi();
    const tokenService = new TokenService();

    let client;
    let headers;

    beforeAll(() => {
      tokenService.getAppToken.mockReturnValue(token);
      client = AttachHeaderService(authApi, tokenService);
      headers = client._headers();
    });

    afterAll(() => {
      tokenService.getAppToken.mockReset();
    });

    it('invokes token service getAppToken method in request interceptor', () => {
      expect(tokenService.getAppToken).toHaveBeenCalled();
    });

    it('puts x-app-token header', () => {
      expect(headers['x-app-token']).toEqual(token);
    });
  });
});
