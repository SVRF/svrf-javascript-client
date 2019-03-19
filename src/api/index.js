import MediaApi from './media';
import AuthenticateApi from './authenticate';
import AppTokenHttpClient from '../http/app-token-http-client';
import HttpClient from '../http/http-client';
import TokenService from '../services/token';
import enums from '../enums';
import Storage from '../storage';

class SvrfApiClient {
  static enums = enums;

  constructor(apiKey, {get, set, remove} = {}) {
    const isTokenStorageProvided = get && set && remove;

    const tokenStorage = isTokenStorageProvided ? {get, set, remove} : Storage;
    const tokenService = new TokenService(tokenStorage);

    const httpClient = new HttpClient();
    this.auth = new AuthenticateApi(httpClient, tokenService, apiKey);

    const appTokenHttpClient = new AppTokenHttpClient(this.auth, tokenService);

    this.media = new MediaApi(appTokenHttpClient);
  }
}

export default SvrfApiClient;
