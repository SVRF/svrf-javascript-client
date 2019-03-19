import HttpClient from './http-client';

class AppTokenHttpClient extends HttpClient {
  constructor(authenticateApi, tokenService) {
    super();

    this.api.interceptors.request.use((request) => {
      const {appToken, expirationTime} = tokenService.getAppTokenInfo();
      const isTokenExpired = Date.now() < expirationTime;

      if (!isTokenExpired) {
        request.headers['x-app-token'] = appToken;
        return request;
      }

      return authenticateApi.authenticate()
        .then(() => {
          const {appToken: newAppToken} = tokenService.getAppTokenInfo();
          request.headers['x-app-token'] = newAppToken;
          return Promise.resolve(request);
        });
    });
  }
}

export default AppTokenHttpClient;
