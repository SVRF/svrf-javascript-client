import Svrf from '../../src';
import HttpClient from '../../src/http/http-client';

const {SVRF_TEST_API_KEY} = process.env;

describe('custom request', () => {
  describe('svrf.request', () => {
    it('sends custom api request', async () => {
      const api = new Svrf(SVRF_TEST_API_KEY);
      const result = await api.request('get', 'vr/trending');

      expect(result.success).toEqual(true);
      expect(result.media.length > 0).toEqual(true);
    });

    it('uses provided http client', async () => {
      const api = new Svrf('', {isManualAuthentication: true});
      const httpClient = new HttpClient();

      await expect(api.request('get', 'vr/trending', {httpClient})).rejects.toThrowErrorMatchingSnapshot();
    });
  });
});
