import QueryService from '../services/query';
import Validator from '../services/validator';

export default class MediaApi {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async getById(id) {
    if (!id) {
      throw new Error('Media Id should be provided');
    }

    return this.httpClient.get(`/vr/${id}`);
  }

  async getTrending(params) {
    Validator.validateMediaSearchOptions(params);
    const preparedParams = QueryService.prepareQueryParams(params);

    return this.httpClient.get('/vr/trending', preparedParams);
  }

  async search(query, params) {
    if (!query) {
      throw new Error('query should be provided');
    }

    Validator.validateMediaSearchOptions(params);
    const preparedParams = QueryService.prepareQueryParams(params);

    return this.httpClient.get('/vr/search', {q: query, ...preparedParams});
  }
}
