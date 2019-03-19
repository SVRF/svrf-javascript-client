import HttpClient from './http-client';

class AppTokenHttpClient extends HttpClient {
  constructor(authenticateApi, tokenService) {
    super();

    this.api.interceptors.request.use((request) => authenticateApi.authenticate()
      .then(() => {
        const {appToken} = tokenService.getAppTokenInfo();
        request.headers['x-app-token'] = appToken;
        return Promise.resolve(request);
      })
    );
  }
}

export default AppTokenHttpClient;
