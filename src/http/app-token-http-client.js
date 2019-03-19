import HttpClient from './http-client';

class AppTokenHttpClient extends HttpClient {
  constructor(authenticateApi, tokenService) {
    super();

    this.api.interceptors.request.use(async (request) => {
      await authenticateApi.authenticate();
      const appToken = tokenService.getAppToken();
      request.headers['x-app-token'] = appToken;
      return request;
    });
  }
}

export default AppTokenHttpClient;
