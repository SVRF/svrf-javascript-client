import SVRF from '../../src';
import storage from '../../src/storage';
import TokenService from '../../src/services/token';

const {SVRF_TEST_API_KEY} = process.env;
const tokenService = new TokenService(storage);

describe('authentication', () => {
  const api = new SVRF(SVRF_TEST_API_KEY);

  beforeAll(async () => {
    await api.auth.authenticate();
  });

  afterEach(() => {
    tokenService.clearAppTokenInfo();
  });

  describe('getting media by id', () => {
    it('gets media if id is a string', async () => {
      const mediaId = '5431660791201792';
      const result = await api.media.getById(mediaId);

      expect(result.success).toEqual(true);
      expect(result.media.id).toEqual(mediaId);
    });

    it('gets media if id is a number', async () => {
      const mediaId = 5431660791201792;
      const result = await api.media.getById(mediaId);

      expect(result.success).toEqual(true);
      expect(result.media.id).toEqual(mediaId.toString());
    });
  });

  describe('getting trending media', () => {
    it('gets media', async () => {
      const result = await api.media.getTrending();

      expect(result.success).toEqual(true);
      expect(result.media).toBeInstanceOf(Array);
    });

    it('gets media with options', async () => {
      const options = {
        size: 15,
        type: [SVRF.enums.mediaType.PHOTO, SVRF.enums.mediaType.VIDEO],
      };

      const result = await api.media.getTrending(options);

      expect(result.success).toEqual(true);
      expect(result.media.length).toEqual(options.size);
      result.media.forEach((media) => {
        expect(options.type).toContain(media.type);
      });
    });

    it('gets media if type option is not array', async () => {
      const options = {
        size: 20,
        type: SVRF.enums.mediaType.PHOTO,
      };

      const result = await api.media.getTrending(options);

      expect(result.success).toEqual(true);
      expect(result.media.length).toEqual(options.size);
      result.media.forEach((media) => {
        expect(options.type).toEqual(media.type);
      });
    });
  });

  describe('searching media', () => {
    const query = 'INVASION';

    it('searches media by query', async () => {
      const result = await api.media.search(query);

      expect(result.success).toEqual(true);
      expect(result.media.length).toBeTruthy();
    });

    it('searches media by query with options', async () => {
      const options = {
        size: 10,
        type: SVRF.enums.mediaType.VIDEO,
      };

      const result = await api.media.search(query, options);

      expect(result.success).toEqual(true);
      expect(result.media.length).toEqual(options.size);
      result.media.forEach((media) => {
        expect(media.type).toEqual(options.type);
      });
    });
  });
});
