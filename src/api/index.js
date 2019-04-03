import AuthApi from './auth';
import MediaApi from './media';

import AppTokenHttpClient from '../http/app-token-http-client';
import HttpClient from '../http/http-client';

import TokenService from '../services/token';
import Validator from '../services/validator';

import enums from '../enums';
import storage from '../storage';

/**
 * @typedef {Object} ApiOptions
 * @prop {boolean} manualAuthentication - pass this option if you want to call api.authenticate
 * manually (for example while user IDLE).
 * @prop {Storage} storage - app token storage
 */

/**
 * @typedef {Object} Storage
 * @prop {Function} get - get app token info from storage
 * @prop {Function} set - set app token info to storage
 * @prop {Function} clear - remove app token info from storage
 */

/**
 * Svrf API provider
*/
class Svrf {
  static enums = enums;

  /**
   * @param {String} apiKey - API Key
   * @param {ApiOptions=} options - API options
   */
  constructor(apiKey, {manualAuthentication, storage: userStorage} = {}) {
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
    const authApi = new AuthApi(httpClient, tokenService, apiKey);

    /**
     * Authenticates your app: retrieves token and saves it or takes it from the storage.
     * You should call it only in case you passed manualAuthentication option.
     * @returns {Promise<void>}
     */
    this.authenticate = authApi.authenticate.bind(authApi);

    if (manualAuthentication) {
      this.authenticate();
    }

    const appTokenHttpClient = new AppTokenHttpClient(authApi, tokenService);

    /**
     * MediaApi instance
     * @type {MediaApi}
     */
    this.media = new MediaApi(appTokenHttpClient);
  }
}

export default Svrf;
