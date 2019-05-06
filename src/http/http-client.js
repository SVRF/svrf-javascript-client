import axios from 'axios';
import {BASE_URL} from '../config';

const api = axios.create();
api.defaults.baseURL = BASE_URL;

/**
 * HTTP client, a wafer-thin wrapper around axios.
 */
async function HttpClient(...args) {
  const response = await api(...args);
  return response.data;
}

export default HttpClient;
