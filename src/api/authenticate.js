class AuthenticateApi {
  constructor(httpClient, tokenService, apiKey) {
    this.apiKey = apiKey;
    this.tokenService = tokenService;
    this.httpClient = httpClient;
  }

  async authenticate() {
    if (!this.tokenService.isTokenExpired()) {
      return;
    }

    const response = await this.httpClient.post('/app/authenticate', {apiKey: this.apiKey});

    this.tokenService.setAppTokenInfo({
      appToken: response.token,
      expiresIn: response.expiresIn,
    });
  }
}

export default AuthenticateApi;
