import MediaApi from '../../../src/api/media';
import MakeAuthenticatedRequests from '../../../src/http/app-token-http-client';
import TokenService from '../../../src/services/token';
import QueryService from '../../../src/services/query';

jest.mock('../../../src/services/token');
jest.mock('../../../src/api/auth');

describe('media api', () => {
  let api;
  let authenticatedClient;
  const tokenService = new TokenService();

  beforeEach(async () => {
    tokenService.getAppToken.mockReturnValue('token');
    authenticatedClient = MakeAuthenticatedRequests(jest.fn(), tokenService);
    api = new MediaApi(authenticatedClient);
  });

  afterAll(() => {
    tokenService.getAppToken.mockReset();
  });

  describe('getById', () => {
    it('gets media', async () => {
      const mediaId = 1;
      const mockMedia = {id: mediaId};

      authenticatedClient.mockResolvedValue({media: mockMedia});

      const result = await api.getById(mediaId);

      expect(authenticatedClient).toHaveBeenCalledWith({headers: {'x-app-token': 'token'}, method: 'get', url: '/vr/1'});
      expect(result.media).toEqual(mockMedia);
    });

    it('throws an error if http client throws it', async () => {
      const mediaId = 1;

      authenticatedClient.mockRejectedValue('error in http request');

      await expect(api.getById(mediaId)).rejects.toThrowErrorMatchingSnapshot();
    });

    it('throws an error if media id is not defined', async () => {
      await expect(api.getById()).rejects.toThrowErrorMatchingSnapshot();
    });

    it('throws an error if media id is empty', async () => {
      await expect(api.getById('')).rejects.toThrowErrorMatchingSnapshot();
    });
  });

  describe('getTrending', () => {
    const mediaList = [{id: 1}, {id: 2}];
    const mockParams = {size: 2};

    beforeAll(() => {
      jest.spyOn(QueryService, 'validateParams').mockReturnValue();
      jest.spyOn(QueryService, 'prepareQueryParams').mockImplementation((params) => ({...params}));
    });

    afterAll(() => {
      QueryService.validateParams.mockRestore();
      QueryService.prepareQueryParams.mockRestore();
    });

    afterEach(() => {
      QueryService.validateParams.mockClear();
      QueryService.prepareQueryParams.mockClear();
    });

    it('gets media if params are not defined', async () => {
      authenticatedClient.mockResolvedValue({media: mediaList});

      const result = await api.getTrending();

      expect(result.media).toEqual(mediaList);
    });

    it('gets media if params are defined', async () => {
      authenticatedClient.mockResolvedValue({media: mediaList});

      const result = await api.getTrending(mockParams);

      expect(result.media).toEqual(mediaList);
    });

    it('invokes http client get method if params are defined', async () => {
      await api.getTrending(mockParams);

      expect(authenticatedClient).toHaveBeenCalledWith({
        headers: {'x-app-token': 'token'}, method: 'get', params: {size: 2}, qs: {size: 2}, url: '/vr/trending',
      });
    });

    it('invokes http client get method if params are not defined', async () => {
      await api.getTrending();

      expect(authenticatedClient).toHaveBeenCalledWith({
        headers: {'x-app-token': 'token'}, method: 'get', params: {}, qs: {}, url: '/vr/trending',
      });
    });

    it('invokes validator and query service methods if params are defined', async () => {
      await api.getTrending(mockParams);

      expect(QueryService.validateParams).toHaveBeenCalledWith(mockParams);
      expect(QueryService.prepareQueryParams).toHaveBeenCalledWith(mockParams);
    });

    it('invokes validator and query service methods if params are not defined', async () => {
      await api.getTrending();

      expect(QueryService.validateParams).toHaveBeenCalledWith(undefined);
      expect(QueryService.prepareQueryParams).toHaveBeenCalledWith(undefined);
    });

    it('throws an error if http client throws it', async () => {
      authenticatedClient.mockRejectedValue(new Error('error in http request'));

      await expect(api.getTrending()).rejects.toThrowErrorMatchingSnapshot();
    });
  });

  describe('search', () => {
    const query = 'query';
    const mediaList = [{id: 1}, {id: 2}];
    const mockParams = {size: 2};

    beforeAll(() => {
      jest.spyOn(QueryService, 'validateParams').mockReturnValue();
      jest.spyOn(QueryService, 'prepareQueryParams').mockImplementation((params) => ({...params}));
    });

    afterAll(() => {
      QueryService.validateParams.mockRestore();
      QueryService.prepareQueryParams.mockRestore();
    });

    afterEach(() => {
      QueryService.validateParams.mockClear();
      QueryService.prepareQueryParams.mockClear();
    });

    it('searches media by query', async () => {
      authenticatedClient.mockResolvedValue({media: mediaList});

      const result = await api.search(query, mockParams);

      expect(result.media).toEqual(mediaList);
    });

    it('invokes http client get method if params are defined', async () => {
      await api.search(query, mockParams);

      expect(authenticatedClient).toHaveBeenCalledWith({
        headers: {'x-app-token': 'token'}, method: 'get', params: {q: 'query', size: 2}, qs: {q: 'query', size: 2}, url: '/vr/search',
      });
    });

    it('invokes http client get method if params are not defined', async () => {
      await api.search(query);

      expect(authenticatedClient).toHaveBeenCalledWith({
        headers: {'x-app-token': 'token'}, method: 'get', params: {q: 'query'}, qs: {q: 'query'}, url: '/vr/search',
      });
    });

    it('invokes validator and query service methods if params are defined', async () => {
      await api.search(query, mockParams);

      expect(QueryService.validateParams).toHaveBeenCalledWith(mockParams);
      expect(QueryService.prepareQueryParams).toHaveBeenCalledWith(mockParams);
    });

    it('invokes validator and query service methods if params are not defined', async () => {
      await api.search(query);

      expect(QueryService.validateParams).toHaveBeenCalledWith(undefined);
      expect(QueryService.prepareQueryParams).toHaveBeenCalledWith(undefined);
    });

    it('throws an error if http client throws it', async () => {
      authenticatedClient.mockRejectedValue(new Error('error in http request'));

      await expect(api.search(query)).rejects.toThrowErrorMatchingSnapshot();
    });

    it('throws an error if query is undefined', async () => {
      await expect(api.search()).rejects.toThrowErrorMatchingSnapshot();
    });

    it('throws an error if query is empty', async () => {
      await expect(api.search('')).rejects.toThrowErrorMatchingSnapshot();
    });
  });
});
