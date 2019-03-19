class AuthenticateApi {
  constructor(httpClient, tokenService, apiKey) {
    this.apiKey = apiKey;
    this.tokenService = tokenService;
    this.httpClient = httpClient;
  }

  async authenticate() {
    const {expirationTime} = this.tokenService.getAppTokenInfo();
    const isTokenExpired = !expirationTime || Date.now() > parseInt(expirationTime, 10);

    if (!isTokenExpired) {
      return;
    }

    const response = await this.httpClient.post('/app/authenticate', {apiKey: this.apiKey});

    const newExpirationTime = Date.now() + response.expiresIn;
    this.tokenService.setAppTokenInfo({appToken: response.token, expirationTime: newExpirationTime});
  }
}

export default AuthenticateApi;
