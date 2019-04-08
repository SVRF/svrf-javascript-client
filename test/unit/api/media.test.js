import MediaApi from '../../../src/api/media';
import HttpClient from '../../../src/http/http-client';
import QueryService from '../../../src/services/query';

jest.mock('../../../src/http/http-client');

describe('media api', () => {
  let api;
  let httpClient;

  beforeEach(async () => {
    httpClient = new HttpClient();
    api = new MediaApi(httpClient);
  });

  describe('getById', () => {
    it('gets media', async () => {
      const mediaId = 1;
      const mockMedia = {id: mediaId};

      httpClient.get.mockResolvedValue({media: mockMedia});

      const result = await api.getById(mediaId);

      expect(httpClient.get).toHaveBeenCalledWith(`/vr/${mediaId}`);
      expect(result.media).toEqual(mockMedia);
    });

    it('throws an error if http client throws it', async () => {
      const mediaId = 1;

      httpClient.get.mockRejectedValue('error in http request');

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
      httpClient.get.mockResolvedValue({media: mediaList});

      const result = await api.getTrending();

      expect(result.media).toEqual(mediaList);
    });

    it('gets media if params are defined', async () => {
      httpClient.get.mockResolvedValue({media: mediaList});

      const result = await api.getTrending(mockParams);

      expect(result.media).toEqual(mediaList);
    });

    it('invokes http client get method if params are defined', async () => {
      await api.getTrending(mockParams);

      expect(httpClient.get).toHaveBeenCalledWith('/vr/trending', mockParams);
    });

    it('invokes http client get method if params are not defined', async () => {
      await api.getTrending();

      expect(httpClient.get).toHaveBeenCalledWith('/vr/trending', {});
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
      httpClient.get.mockRejectedValue(new Error('error in http request'));

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
      httpClient.get.mockResolvedValue({media: mediaList});

      const result = await api.search(query, mockParams);

      expect(result.media).toEqual(mediaList);
    });

    it('invokes http client get method if params are defined', async () => {
      await api.search(query, mockParams);

      expect(httpClient.get).toHaveBeenCalledWith('/vr/search', {q: query, ...mockParams});
    });

    it('invokes http client get method if params are not defined', async () => {
      await api.search(query);

      expect(httpClient.get).toHaveBeenCalledWith('/vr/search', {q: query});
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
      httpClient.get.mockRejectedValue(new Error('error in http request'));

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
