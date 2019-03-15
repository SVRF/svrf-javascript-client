import MediaApi from './media';
import AuthenticateApi from './authenticate';
import AppTokenHttpClient from './app-token-http-client';
import HttpClient from './http-client';
import {BASE_URL} from '../config';

class SvrfApiClient {
  constructor(apiKey) {
    this.httpClient = new HttpClient(BASE_URL);
    this.appTokenHttpClient = new AppTokenHttpClient(BASE_URL, apiKey);

    this.auth = new AuthenticateApi(this.httpClient, apiKey);
    this.media = new MediaApi(this.appTokenHttpClient);
  }
}

export default SvrfApiClient;
