import MediaApi from '../../../src/api/media';
import HttpClient from '../../../src/http/http-client';

jest.mock('../../../src/http/http-client');

describe('authentication', () => {
  let api;
  let httpClient;

  beforeEach(async () => {
    httpClient = new HttpClient();
    api = new MediaApi(httpClient);
  });

  describe('getById', () => {
    it('throws an error if media id is not defined', () => {
      expect(api.getById()).rejects.toThrowErrorMatchingSnapshot();
    });

    it('throws an error if media id is empty', () => {
      expect(api.getById('')).rejects.toThrowErrorMatchingSnapshot();
    });
  });

  describe('getTrending', () => {

  });

  describe('search', () => {
    it('throws an error if query is undefined', () => {
      expect(api.search()).rejects.toThrowErrorMatchingSnapshot();
    });

    it('throws an error if query is empty', () => {
      expect(api.search('')).rejects.toThrowErrorMatchingSnapshot();
    });
  });
});
