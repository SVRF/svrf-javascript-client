import AuthApi from './auth';
import MediaApi from './media';

import AppTokenHttpClient from '../http/app-token-http-client';
import HttpClient from '../http/http-client';

import TokenService from '../services/token';
import Validator from '../services/validator';

import enums from '../enums';
import storage from '../storage';

export default class SvrfApiClient {
  static enums = enums;

  constructor(apiKey, {storage: userStorage} = {}) {
    if (userStorage) {
      const storageKeys = ['get', 'set', 'clear'];

      Validator.validateObjectSchema('User Storage', userStorage, {
        allowedKeys: storageKeys,
        requiredKeys: storageKeys,
      });
    }

    const tokenStorage = userStorage || storage;
    const tokenService = new TokenService(tokenStorage);

    const httpClient = new HttpClient();
    this.auth = new AuthApi(httpClient, tokenService, apiKey);

    const appTokenHttpClient = new AppTokenHttpClient(this.auth, tokenService);

    this.media = new MediaApi(appTokenHttpClient);
  }
}
