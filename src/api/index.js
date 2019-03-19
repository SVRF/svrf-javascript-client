import MediaApi from './media';
import AuthenticateApi from './authenticate';
import AppTokenHttpClient from '../http/app-token-http-client';
import HttpClient from '../http/http-client';
import TokenService from '../services/token';
import enums from '../enums';
import storage from '../storage';
import Validator from '../services/validator';

class SvrfApiClient {
  static enums = enums;

  constructor(apiKey, {userStorage} = {}) {
    if (userStorage) {
      Validator.validateStorage(userStorage);
    }

    const tokenStorage = userStorage || storage;
    const tokenService = new TokenService(tokenStorage);

    const httpClient = new HttpClient();
    this.auth = new AuthenticateApi(httpClient, tokenService, apiKey);

    const appTokenHttpClient = new AppTokenHttpClient(this.auth, tokenService);

    this.media = new MediaApi(appTokenHttpClient);
  }
}

export default SvrfApiClient;
