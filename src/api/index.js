import MediaApi from './media';
import AuthenticateApi from './authenticate';
import AppTokenHttpClient from '../http/app-token-http-client';
import HttpClient from '../http/http-client';
import TokenService from '../services/token';

class SvrfApiClient {
  constructor(apiKey, {getAppTokenInfo, setAppTokenInfo, clearAppTokenInfo} = {}) {
    const isTokenServiceProvided = getAppTokenInfo && setAppTokenInfo && clearAppTokenInfo;

    const tokenService = isTokenServiceProvided
      ? {getAppTokenInfo, setAppTokenInfo, clearAppTokenInfo}
      : new TokenService();

    const httpClient = new HttpClient();
    this.auth = new AuthenticateApi(httpClient, tokenService, apiKey);

    const appTokenHttpClient = new AppTokenHttpClient(this.auth, tokenService);

    this.media = new MediaApi(appTokenHttpClient);
  }
}

export default SvrfApiClient;
