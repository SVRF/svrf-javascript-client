import SVRF from '../../src';
import storage from '../../src/storage';
import TokenService from '../../src/services/token';

const {SVRF_TEST_API_KEY} = process.env;
const tokenService = new TokenService(storage);

describe('media api', () => {
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

    it('handles 404 error', () => {
      const mediaId = 1;

      expect(api.media.getById(mediaId)).rejects.toThrowErrorMatchingSnapshot();
    });
  });

  // A bunch of functions to test both search and trending options (they're the same).

  async function testAllOptions(callback) {
    const options = {
      category: SVRF.enums.category.FACE_FILTERS,
      minimumWidth: 1000,
      pageNum: 1,
      size: 5,
      stereoscopicType: SVRF.enums.stereoscopicType.NONE,
      type: [SVRF.enums.mediaType.PHOTO, SVRF.enums.mediaType.VIDEO],
    };

    const result = await callback(options);

    expect(result.success).toEqual(true);
  }

  async function testCategory(callback) {
    const options = {
      category: SVRF.enums.category.FACE_FILTERS,
    };

    const result = await callback(options);

    // Category isn't publicly available, at least check that models are returned.
    result.media.forEach((media) => (
      expect(media.type).toBe(SVRF.enums.mediaType.MODEL_3D)
    ));
  }

  async function testMediaType(callback) {
    const type = SVRF.enums.mediaType.PHOTO;

    const result = await callback({type});

    result.media.forEach((media) => (
      expect(media.type).toEqual(type)
    ));
  }

  async function testMediaTypeArray(callback) {
    const types = [SVRF.enums.mediaType.PHOTO, SVRF.enums.mediaType.MODEL_3D];

    const result = await callback({type: types});

    result.media.forEach((media) => (
      expect(types).toContain(media.type)
    ));
  }

  async function testMinimumWidth(callback) {
    const minimumWidth = 2000;

    const result = await callback({minimumWidth});

    result.media.forEach((media) => (
      expect(media.width).toBeGreaterThanOrEqual(minimumWidth)
    ));
  }

  async function testPagination(callback) {
    const {media: firstPage} = await callback({pageNum: 0});
    const {media: secondPage} = await callback({pageNum: 1});

    const ids = firstPage.concat(secondPage).map((m) => m.id);

    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toEqual(firstPage.length + secondPage.length);
  }

  async function testSize(callback) {
    const size = 13;

    const result = await callback({size});

    expect(result.media.length).toEqual(size);
  }

  // Stereoscopic type isn't publicly available, so checking that results
  // are not intercepting.
  async function testStereoscopicType(callback) {
    const {LEFT_RIGHT, TOP_BOTTOM} = SVRF.enums.stereoscopicType;

    const {media: leftRightResults} = await callback({stereoscopicType: LEFT_RIGHT});
    const {media: topBottomResults} = await callback({stereoscopicType: TOP_BOTTOM});

    const ids = leftRightResults.concat(topBottomResults).map((m) => m.id);

    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toEqual(leftRightResults.length + topBottomResults.length);
  }

  describe('getting trending media', () => {
    it('gets trending media', async () => {
      const result = await api.media.getTrending();

      expect(result.success).toEqual(true);
      expect(result.media).toBeInstanceOf(Array);
    });

    const testTrending = (testFunction) => (
      () => testFunction((options) => api.media.getTrending(options))
    );

    it('gets trending media with all options', testTrending(testAllOptions));
    it('gets trending media with specific category', testTrending(testCategory));
    it('gets trending media with specific media type', testTrending(testMediaType));
    it('gets trending media with multiple media types', testTrending(testMediaTypeArray));
    it('gets trending media with minimum width', testTrending(testMinimumWidth));
    it('gets trending media from particular page', testTrending(testPagination));
    it('gets specified amount of trending media', testTrending(testSize));
    it('gets trending media with specific stereoscopic type', testTrending(testStereoscopicType));
  });

  describe('searching media', () => {
    const query = 'vr';

    it('searches media by query', async () => {
      const result = await api.media.search(query);

      expect(result.success).toEqual(true);
      expect(result.media.length).toBeTruthy();
    });

    const testMaskSearch = (testFunction) => (
      () => testFunction((options) => api.media.search('glasses', options))
    );
    const testSearch = (testFunction) => (
      () => testFunction((options) => api.media.search(query, options))
    );

    it('searches media with all options', testSearch(testAllOptions));
    it('searches media with specific category', testMaskSearch(testCategory));
    it('searches media with specific media type', testSearch(testMediaType));
    it('searches media with multiple media types', testSearch(testMediaTypeArray));
    it('searches media with minimum width', testSearch(testMinimumWidth));
    it('searches media from particular page', testSearch(testPagination));
    it('searches specified amount of media', testSearch(testSize));
    it('searches media with specific stereoscopic type', testSearch(testStereoscopicType));
  });
});
