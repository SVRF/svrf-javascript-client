import HttpClient from './http-client';

/**
 * HTTP client which sets x-app-token header in requests
 * @extends HttpClient
*/
class AppTokenHttpClient extends HttpClient {
  /**
   * @param {AuthApi} authApi - Authentication API
   * @param {TokenService} tokenService - Service which provides methods for token storage
   */
  constructor(authApi, tokenService) {
    super();

    this.api.interceptors.request.use(async (request) => {
      await authApi.authenticate();
      const appToken = tokenService.getAppToken();
      request.headers['x-app-token'] = appToken;
      return request;
    });
  }
}

export default AppTokenHttpClient;
