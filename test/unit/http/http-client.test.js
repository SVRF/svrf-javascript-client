import HttpClient from '../../../src/http/http-client';

describe('HttpClient', () => {
  describe('test request methods', () => {
    const client = new HttpClient();
    const response = {data: {a: 1, b: 2}};

    beforeAll(() => {
      jest.spyOn(client.api, 'get')
        .mockResolvedValue(response);
      jest.spyOn(client.api, 'post')
        .mockResolvedValue(response);
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
  });
});
