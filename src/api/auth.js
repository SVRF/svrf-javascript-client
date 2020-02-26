/**
 * Authentication API provider
*/
class AuthApi {
  constructor(httpClient, appTokenService, apiKey) {
    this.httpClient = httpClient;
    this.appTokenService = appTokenService;
    this.apiKey = apiKey;
  }

  /**
   * Authenticates your app: retrieves token and saves it or takes it from the storage.
   * @returns {Promise<void>}
   */
  async authenticate() {
    if (this.appTokenService.isTokenValid()) {
      return;
    }

    if (!this.apiKey) {
      throw new Error('Api Key should be provided for authentication');
    }

    // Preventing multiple requests.
    if (!this.authPromise) {
      this.authPromise = this.httpClient.post('/app/authenticate', {apiKey: this.apiKey});
    }

    const response = await this.authPromise;

    this.appTokenService.setTokenInfo({
      token: response.token,
      expiresAt: Date.now() + response.expiresIn,
    });

    delete this.authPromise;
  }
}

export default AuthApi;
