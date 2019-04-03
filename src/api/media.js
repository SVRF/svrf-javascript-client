import QueryService from '../services/query';

/**
 * @typedef {Object} HttpRequestParams
 * @prop {string=} category - Media category
 * @prop {boolean=} hasBlendShapes
 * @prop {boolean=} isFaceFilter
 * @prop {number=} minimumWidth - Media minimum width
 * @prop {number=} pageNum - Page number
 * @prop {boolean=} requiresBlendShapes
 * @prop {number=} size - Page size
 * @prop {string=} stereoscopicType - Media stereoscopic type
 * @prop {(string|Array<string>)=} type - Media type
 */

/**
 * @typedef {Object} Media
 * @prop {string} id
 * @prop {string} src - Source file URL with original quality
 * @prop {string} title
 * @prop {string} description
 * @prop {Array<string>} authors
 * @prop {string} site - Source site name where the media came from
 * @prop {string} canonical - Canonical URL for the Svrf site
 * @prop {string} embedUrl - Embed player URL
 * @prop {string} embedHtml - Ready-to-paste HTML code with embed player
 * @prop {string} type
 * @prop {boolean} adult - Is media only for adults
 * @prop {number|null} width - Width in pixels
 * @prop {number|null} height - Height in pixels
 * @prop {number|null} duration - Duration in seconds
 * @prop {MediaMetadata} metadata
 * @prop {MediaFiles} files
 */

/**
 * @typedef {Object} MediaFiles
 * @prop {Object} images
 * @prop {Object} videos
 * @prop {Object} stereo
 */

/**
 * @typedef {Object} MediaMetadata
 * @prop {boolean=} isFaceFilter
 * @prop {boolean=} hasBlendShapes
 * @prop {boolean=} requiresBlendShapes
 */

/**
 * @typedef {Object} SingleMediaApiResponse
 * @prop {boolean} success
 * @prop {Media} media
 */

/**
 * @typedef {Object} MultipleMediaApiResponse
 * @prop {boolean} success
 * @prop {Array<Media>} media
 * @prop {string} nextPageCursor
 * @prop {number} nextPageNum
 * @prop {number} pageNum
 */

/**
 * @typedef {Object} SearchMediaApiResponse
 * @prop {boolean} success
 * @prop {Array<Media>} media
 * @prop {string} nextPageCursor
 * @prop {number} nextPageNum
 * @prop {number} pageNum
 * @prop {number} tookMs
 * @prop {number} totalNum
 */

/**
 * Media API provider
*/
class MediaApi {
  constructor(httpClient) {
    /** @private */
    this.httpClient = httpClient;
  }

  /**
   * Get media by ID
   * @param {number|string} id - ID of media
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
   * @param {string} query - Query for searching media
   * @param {HttpRequestParams=} params - Request params
   * @returns {Promise<SearchMediaApiResponse>} - Found media by query
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
