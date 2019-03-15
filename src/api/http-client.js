import axios from 'axios';

class HttpClient {
  constructor(baseUrl) {
    this.api = axios.create();
    this.api.defaults.baseURL = baseUrl;
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

export default HttpClient;
