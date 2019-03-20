import HttpClient from './http-client';

export default class AppTokenHttpClient extends HttpClient {
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
