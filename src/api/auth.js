/**
 * Authentication API provider
*/
class AuthApi {
  /**
   * @param {HttpClient} httpClient - HTTP client for making requests
   * @param {TokenService} tokenService - Service which provides methods for token storage
   * @param {String} apiKey - Application API Key
   */
  constructor(httpClient, tokenService, apiKey) {
    /** @private */
    this.httpClient = httpClient;
    /** @private */
    this.tokenService = tokenService;
    /** @private */
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
