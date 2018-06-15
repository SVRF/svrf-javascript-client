/**
 * SVRF API
 * # Getting Started  SVRF's API allows you to supercharge your project or app with the first and largest search engine for immersive experiences. We make it simple for any developer to incorporate highly immersive experiences with all kinds of applications: virtual reality, augmented reality, mixed reality, mobile, and web.  The SVRF API is based on REST principles, allowing it to integrate cross-platform. Our endpoints return responses in [JSON][]. We support [CORS][], allowing you to access immersive experiences indexed by SVRF on your own web domains. We provide a variety of resolutions, projections, and file formats to support most modern clients.  The SVRF API Documentation is available at [https://developers.svrf.com][SVRF Dev].  ## Access and API Keys  The SVRF API is currently in private beta and access is limited to select partners. If you are interested in using the SVRF API for your app or project, please contact us at [api@svrf.com][API Email]. We cannot guarantee immediate access for all requests, but we will announce a public release in the coming months.  See our [terms of service][TOS] for restrictions on using the SVRF API.  If you have any questions please contact us at [api@svrf.com][API Email]. Submit API corrections via [GitHub Issues][].  ## API Highlights  ### Search Endpoint  The [SVRF Search Endpoint][Docs Search] brings the power of immersive search found on [SVRF.com][SVRF] to your app or project. Our search engine enables your users to instantly find the immersive experience they are seeking. Content is sorted by the SVRF rating system, ensuring that the highest quality and most relevant search results are returned first.  ### Trending Endpoint  The [SVRF Trending Endpoint][Docs Trending] provides your app or project with the hottest immersive content - curated by real humans. The experiences returned mirror the [SVRF homepage][SVRF], from timely cultural content to trending pop-culture references. The experiences are updated regularly to ensure users always get a fresh list of immersive content.  ## Attribution  ### Authors and Site Credit  At SVRF, we believe in giving credit where credit is due. Do your best to provide attribution to the `authors` and `site` where the content originated. We suggest using the format: __by {authors} via {site}__.  If possible, provide a way for users to discover and visit the page the content originally came from (`url`).  ### Powered By SVRF  As per section 5a of the [terms of service][TOS], __we require all apps that use the SVRF API to conspicuously display \"Powered By SVRF\" attribution marks where the API is utilized.__  ## Rate Limits  The SVRF API has a generous rate limit to ensure the best experience for your users. We rate limit by IP address with a maximum of 100 requests per second. If you exceed this rate limit, requests will be blocked for 60 seconds. Requests blocked by the rate limit will return with status code `429`.  [API Email]: mailto:api@svrf.com [CORS]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing [Docs Search]: https://developers.svrf.com/#tag/Media/paths/~1vr~1search?q={q}/get [Docs Trending]: https://developers.svrf.com/#tag/Media/paths/~1vr~1trending/get [GitHub Issues]: https://github.com/Svrf/svrf-api/issues [JSON]: http://www.json.org/ [SVRF]: https://www.svrf.com [SVRF Dev]: https://developers.svrf.com [TOS]: https://www.svrf.com/terms 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api@svrf.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SVRF) {
      root.SVRF = {};
    }
    root.SVRF.MediaStereo = factory(root.SVRF.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediaStereo model module.
   * @module model/MediaStereo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MediaStereo</code>.
   * Resized versions of the Media, matching the Media&#39;s type, in stereo. Only included if the Media is stereoscopic. Resolutions larger than the original size will not be included (the original is included as &#x60;max&#x60;).
   * @alias module:model/MediaStereo
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>MediaStereo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaStereo} obj Optional instance to populate.
   * @return {module:model/MediaStereo} The populated <code>MediaStereo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('848')) {
        obj['848'] = ApiClient.convertToType(data['848'], 'String');
      }
      if (data.hasOwnProperty('1440')) {
        obj['1440'] = ApiClient.convertToType(data['1440'], 'String');
      }
      if (data.hasOwnProperty('2160')) {
        obj['2160'] = ApiClient.convertToType(data['2160'], 'String');
      }
      if (data.hasOwnProperty('4096')) {
        obj['4096'] = ApiClient.convertToType(data['4096'], 'String');
      }
      if (data.hasOwnProperty('hls')) {
        obj['hls'] = ApiClient.convertToType(data['hls'], 'String');
      }
      if (data.hasOwnProperty('max')) {
        obj['max'] = ApiClient.convertToType(data['max'], 'String');
      }
    }
    return obj;
  }

  /**
   * 848px wide video with a 1.3MBps video rate, 96KBps audio rate. Only included if the Media is a `video`.
   * @member {String} 848
   */
  exports.prototype['848'] = undefined;
  /**
   * 1440px wide video with a 4.4MBps video rate, 128KBps audio rate. Only included if the Media is a `video`.
   * @member {String} 1440
   */
  exports.prototype['1440'] = undefined;
  /**
   * 2160px wide video with a 10MBps video rate, 192KBps audio rate. Only included if the Media is a `video`.
   * @member {String} 2160
   */
  exports.prototype['2160'] = undefined;
  /**
   * 4096px wide image. This image should be used on mobile devices, as larger images may cause some devices to crash. Only included if the Media is a `photo`.
   * @member {String} 4096
   */
  exports.prototype['4096'] = undefined;
  /**
   * URL for an HLS master playlist containing streams in all of the above resolutions which are no wider than the original Media. Only included if the Media is a `video`.
   * @member {String} hls
   */
  exports.prototype['hls'] = undefined;
  /**
   * The Media in its largest available size (the original size).
   * @member {String} max
   */
  exports.prototype['max'] = undefined;



  return exports;
}));


