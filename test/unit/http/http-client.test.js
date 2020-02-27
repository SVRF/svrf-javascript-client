import HttpClient from '../../../src/http/http-client';
import {BASE_URL} from '../../../src/config';

describe('HttpClient', () => {
  describe('test request methods', () => {
    let client;
    const response = {data: {a: 1, b: 2}};

    function createClient(options) {
      client = new HttpClient(options);

      jest.spyOn(client.api, 'get')
        .mockResolvedValue(response);
      jest.spyOn(client.api, 'post')
        .mockResolvedValue(response);
      jest.spyOn(client.api, 'request')
        .mockResolvedValue(response);
    }

    beforeEach(() => createClient());

    it('sets base url from config by default', () => {
      expect(client.api.defaults.baseURL).toEqual(BASE_URL);
    });

    it('sets custom base url', () => {
      const baseUrl = 'https://google.com';
      createClient({baseUrl});

      expect(client.api.defaults.baseURL).toEqual(baseUrl);
    });

    it('performs get requests', async () => {
      const url = '/get/url';
      const params = {param1: 'a', param2: 'b'};

      const responseData = await client.get(url, params);
      expect(responseData).toEqual(response.data);

      expect(client.api.get).toHaveBeenCalledTimes(1);
      expect(client.api.get).toHaveBeenCalledWith(url, {params});
    });

    it('performs post requests', async () => {
      const url = '/post/url';
      const body = {data1: 'c', data2: 'd'};

      const responseData = await client.post(url, body);
      expect(responseData).toEqual(response.data);

      expect(client.api.post).toHaveBeenCalledTimes(1);
      expect(client.api.post).toHaveBeenCalledWith(url, body);
    });

    it('performs custom requests', async () => {
      const method = 'head';
      const url = '/custom/url';
      const params = {a: 1, b: '2'};

      const responseData = await client.request(method, url, params);
      expect(responseData).toEqual(response.data);

      expect(client.api.request).toHaveBeenCalledTimes(1);
      expect(client.api.request).toHaveBeenCalledWith({
        method,
        url,
        ...params,
      });
    });
  });
});
