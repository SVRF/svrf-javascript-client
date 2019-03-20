import axios from 'axios';
import {BASE_URL} from '../config';

export default class HttpClient {
  constructor() {
    this.api = axios.create();
    this.api.defaults.baseURL = BASE_URL;
  }

  async get(url, params) {
    const response = await this.api.get(url, {params});
    return response.data;
  }

  async post(url, body) {
    const response = await this.api.post(url, body);
    return response.data;
  }
}
