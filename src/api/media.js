import Validator from '../services/validator';

class MediaApi {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  getById(id) {
    return this.httpClient.get(`/vr/${id}`);
  }

  getTrending(options) {
    Validator.checkMediaRequestOptions(options);
    return this.httpClient.get('/vr/trending', options);
  }

  search(query, options) {
    if (!query) {
      throw new Error('query should be provided');
    }

    Validator.checkMediaRequestOptions(options);

    return this.httpClient.get('/vr/search', {q: query, ...options});
  }
}

export default MediaApi;
