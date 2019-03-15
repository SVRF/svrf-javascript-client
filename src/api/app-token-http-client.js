import HttpClient from './http-client';
import AuthenticateApi from './authenticate';
import TokenService from '../services/token';

const tokenService = new TokenService();

class AppTokenHttpClient extends HttpClient {
  constructor(baseUrl, apiKey) {
    super(baseUrl);

    this.api.interceptors.request.use((request) => {
      if (!tokenService.isTokenExpired()) {
        request.headers['x-app-token'] = tokenService.getAppToken();
        return request;
      }

      const authenticateApi = new AuthenticateApi(apiKey);
      return authenticateApi.authenticate()
        .then(() => {
          request.headers['x-app-token'] = tokenService.getAppToken();
          return Promise.resolve(request);
        });
    });
  }
}

export default AppTokenHttpClient;
