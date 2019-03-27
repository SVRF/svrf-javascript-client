import QueryService from '../services/query';

/**
 * @typedef {Object} HttpRequestParams
 * @prop {String=} category - Media category
 * @prop {Number=} minimumWidth - Media minimum width
 * @prop {Number=} pageNum - Page number
 * @prop {Number=} size - Page size
 * @prop {String=} stereoscopicType - Media stereoscopic type
 * @prop {(String|Array<String>)=} type - Media type
 */

/**
 * @typedef {Object} Media
 * @prop {String} id
 * @prop {String} src - Source file URL with original quality
 * @prop {String} title
 * @prop {String} description
 * @prop {Array<String>} authors
 * @prop {String} site - Source site name where the media came from
 * @prop {String} canonical - Canonical URL for the SVRF site
 * @prop {String} embedUrl - Embed player URL
 * @prop {String} embedHtml - Ready-to-paste HTML code with embed player
 * @prop {String} type
 * @prop {Boolean} adult - Is media only for adults
 * @prop {Number|null} width - Width in pixels
 * @prop {Number|null} height - Height in pixels
 * @prop {Number|null} duration - Duration in seconds
 * @prop {Object} metadata
 * @prop {MediaFiles} files
 */

/**
 * @typedef {Object} MediaFiles
 * @prop {Object} images
 * @prop {Object} videos
 * @prop {Object} stereo
 */

/**
 * @typedef {Object} SingleMediaApiResponse
 * @prop {Boolean} success
 * @prop {Media} media
 */

/**
 * @typedef {Object} MultipleMediaApiResponse
 * @prop {Boolean} success
 * @prop {Array<Media>} media
 * @prop {String} nextPageCursor
 * @prop {Number} nextPageNum
 * @prop {Number} pageNum
 */

/**
 * Media API provider
*/
class MediaApi {
  /**
   * @param {HttpClient} httpClient - HTTP client for making requests
   */
  constructor(httpClient) {
    /** @private */
    this.httpClient = httpClient;
  }

  /**
   * Get media by ID
   * @param {Number|String} id - ID of media
   * @returns {Promise<SingleMediaApiResponse>} Found media by provided ID
   * @throws {Error} Media Id should be provided
   */
  async getById(id) {
    if (!id) {
      throw new Error('Media Id should be provided');
    }

    return this.httpClient.get(`/vr/${id}`);
  }

  /**
   * Get trending media
   * @param {HttpRequestParams=} params - Request params
   * @returns {Promise<MultipleMediaApiResponse>} Found trending media
   */
  async getTrending(params) {
    QueryService.validateParams(params);
    const preparedParams = QueryService.prepareQueryParams(params);

    return this.httpClient.get('/vr/trending', preparedParams);
  }

  /**
   * Get media by query
   * @param {String} query - Query for searching media
   * @param {HttpRequestParams=} params - Request params
   * @returns {Promise<MultipleMediaApiResponse>} - Found media by query
   * @throws {Error} query should be provided
   */
  async search(query, params) {
    if (!query) {
      throw new Error('query should be provided');
    }

    QueryService.validateParams(params);
    const preparedParams = QueryService.prepareQueryParams(params);

    return this.httpClient.get('/vr/search', {q: query, ...preparedParams});
  }
}

export default MediaApi;
