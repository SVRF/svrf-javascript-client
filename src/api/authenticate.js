class AuthenticateApi {
  constructor(httpClient, tokenService, apiKey) {
    this.apiKey = apiKey;
    this.tokenService = tokenService;
    this.httpClient = httpClient;
  }

  async authenticate() {
    const response = await this.httpClient.post('/app/authenticate', {apiKey: this.apiKey});

    const date = new Date();
    date.setSeconds(date.getSeconds() + response.expiresIn);

    this.tokenService.setAppTokenInfo({appToken: response.token, expirationTime: date});
  }
}

export default AuthenticateApi;
