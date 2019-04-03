/**
 * Authentication API provider
*/
class AuthApi {
  constructor(httpClient, tokenService, apiKey) {
    this.httpClient = httpClient;
    this.tokenService = tokenService;
    this.apiKey = apiKey;
  }

  /**
   * Authenticates your app: retrieves token and saves it or takes it from the storage.
   * @returns {Promise<void>}
   */
  async authenticate() {
    if (this.tokenService.isTokenValid()) {
      return;
    }

    if (!this.apiKey) {
      throw new Error('Api Key should be provided for authentication');
    }

    const response = await this.httpClient.post('/app/authenticate', {apiKey: this.apiKey});

    this.tokenService.setAppTokenInfo({
      appToken: response.token,
      expiresIn: response.expiresIn,
    });
  }
}

export default AuthApi;
