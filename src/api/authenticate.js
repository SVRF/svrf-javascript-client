import TokenService from '../services/token';

class AuthenticateApi {
  constructor(httpClient, apiKey) {
    this.apiKey = apiKey;
    this.tokenService = new TokenService();
    this.httpClient = httpClient;
  }

  async authenticate() {
    const response = await this.httpClient.post('/app/authenticate', {apiKey: this.apiKey});

    this.tokenService.setAppToken(response.token);
    this.tokenService.setExpirationTime(new Date() + response.expiresIn);
  }
}

export default AuthenticateApi;
