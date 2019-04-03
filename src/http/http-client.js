import axios from 'axios';
import {BASE_URL} from '../config';

/**
 * HTTP client
*/
class HttpClient {
  /**
   * Create HTTP client
   */
  constructor() {
    /** @private */
    this.api = axios.create();
    this.api.defaults.baseURL = BASE_URL;
  }

  /**
   * Make GET request
   * @param {string} url - Request URL
   * @param {Object} params - Query params
   * @returns {Promise<any>} HTTP response data
   */
  async get(url, params) {
    const response = await this.api.get(url, {params});
    return response.data;
  }

  /**
   * Make POST request
   * @param {string} url - Request URL
   * @param {Object} body - Request body
   * @returns {Promise<any>} HTTP response data
   */
  async post(url, body) {
    const response = await this.api.post(url, body);
    return response.data;
  }
}

export default HttpClient;
