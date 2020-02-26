import HttpClient from './http-client';

/**
 * HTTP client which sets x-app-token header in requests
 * @extends HttpClient
*/
class AppTokenHttpClient extends HttpClient {
  /**
   * @param {Function} authApi - Authentication API
   * @param {TokenService} tokenService - Service which provides methods for token storage
   * @param {{baseUrl: string}} options - HTTP client options
   */
  constructor(authApi, tokenService, options) {
    super(options);

    this.api.interceptors.request.use(async (request) => {
      await authApi.authenticate();
      const appToken = tokenService.getToken();
      request.headers['x-app-token'] = appToken;
      return request;
    });
  }
}

export default AppTokenHttpClient;
