/**
 * SVRF API
 * # Getting Started  SVRF's API allows you to supercharge your project or app with the first and largest search engine for immersive experiences. We make it simple for any developer to incorporate highly immersive experiences with all kinds of applications: virtual reality, augmented reality, mixed reality, mobile, and web.  The SVRF API is based on REST principles, allowing it to integrate cross-platform. Our endpoints return responses in [JSON][]. We support [CORS][], allowing you to access immersive experiences indexed by SVRF on your own web domains. We provide a variety of resolutions, projections, and file formats to support most modern clients.  The SVRF API Documentation is available at [https://developers.svrf.com][SVRF Dev].  ## Access and API Keys  The SVRF API is currently in private beta and access is limited to select partners. If you are interested in using the SVRF API for your app or project, please contact us at [api@svrf.com][API Email]. We cannot guarantee immediate access for all requests, but we will announce a public release in the coming months.  See our [terms of service][TOS] for restrictions on using the SVRF API.  If you have any questions please contact us at [api@svrf.com][API Email]. Submit API corrections via [GitHub Issues][].  ## API Highlights  ### Search Endpoint  The [SVRF Search Endpoint][Docs Search] brings the power of immersive search found on [SVRF.com][SVRF] to your app or project. Our search engine enables your users to instantly find the immersive experience they are seeking. Content is sorted by the SVRF rating system, ensuring that the highest quality and most relevant search results are returned first.  ### Trending Endpoint  The [SVRF Trending Endpoint][Docs Trending] provides your app or project with the hottest immersive content - curated by real humans. The experiences returned mirror the [SVRF homepage][SVRF], from timely cultural content to trending pop-culture references. The experiences are updated regularly to ensure users always get a fresh list of immersive content.  ## API Libraries  You can use SVRF API libraries to encapsulate endpoint requests: * [C#][CSharp] * [Java][Java] * [JavaScript][JavaScript] * [Objective C][Objective C] * [Swift][Swift]  ## Attribution  ### Authors and Site Credit  At SVRF, we believe in giving credit where credit is due. Do your best to provide attribution to the `authors` and `site` where the content originated. We suggest using the format: __by {authors} via {site}__.  If possible, provide a way for users to discover and visit the page the content originally came from (`url`).  ### Powered By SVRF  As per section 5a of the [terms of service][TOS], __we require all apps that use the SVRF API to conspicuously display \"Powered By SVRF\" attribution marks where the API is utilized.__  ## Rate Limits  The SVRF API has a generous rate limit to ensure the best experience for your users. We rate limit by IP address with a maximum of 100 requests per second. If you exceed this rate limit, requests will be blocked for 60 seconds. Requests blocked by the rate limit will return with status code `429`.  [API Email]: mailto:api@svrf.com [CORS]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing [CSharp]: https://www.nuget.org/packages/SVRF.Client [Docs Search]: https://developers.svrf.com/#tag/Media/paths/~1vr~1search?q={q}/get [Docs Trending]: https://developers.svrf.com/#tag/Media/paths/~1vr~1trending/get [GitHub Issues]: https://github.com/Svrf/svrf-api/issues [Java]: https://mvnrepository.com/artifact/com.svrf/svrf-client [JavaScript]: https://www.npmjs.com/package/svrf-client [JSON]: http://www.json.org/ [Objective C]: https://cocoapods.org/pods/SVRFClient [SVRF]: https://www.svrf.com [SVRF Dev]: https://developers.svrf.com [Swift]: https://cocoapods.org/pods/SVRFClientSwift [TOS]: https://www.svrf.com/terms 
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
    root.SVRF.MediaImages = factory(root.SVRF.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediaImages model module.
   * @module model/MediaImages
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>MediaImages</code>.
   * Resized &#x60;jpeg&#x60; stills of the Media. For &#x60;video&#x60;, these will be stills from 1/3 of the video&#39;s duration. Resolutions larger than the original size will not be included (the original is included as &#x60;max&#x60;). For stereoscopic content, this will be a monoscopic version of the top or left channel.
   * @alias module:model/MediaImages
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>MediaImages</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaImages} obj Optional instance to populate.
   * @return {module:model/MediaImages} The populated <code>MediaImages</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('136')) {
        obj['136'] = ApiClient.convertToType(data['136'], 'String');
      }
      if (data.hasOwnProperty('540')) {
        obj['540'] = ApiClient.convertToType(data['540'], 'String');
      }
      if (data.hasOwnProperty('720')) {
        obj['720'] = ApiClient.convertToType(data['720'], 'String');
      }
      if (data.hasOwnProperty('1080')) {
        obj['1080'] = ApiClient.convertToType(data['1080'], 'String');
      }
      if (data.hasOwnProperty('4096')) {
        obj['4096'] = ApiClient.convertToType(data['4096'], 'String');
      }
      if (data.hasOwnProperty('8192')) {
        obj['8192'] = ApiClient.convertToType(data['8192'], 'String');
      }
      if (data.hasOwnProperty('1080Watermarked')) {
        obj['1080Watermarked'] = ApiClient.convertToType(data['1080Watermarked'], 'String');
      }
      if (data.hasOwnProperty('720x405')) {
        obj['720x405'] = ApiClient.convertToType(data['720x405'], 'String');
      }
      if (data.hasOwnProperty('720x540')) {
        obj['720x540'] = ApiClient.convertToType(data['720x540'], 'String');
      }
      if (data.hasOwnProperty('720x720')) {
        obj['720x720'] = ApiClient.convertToType(data['720x720'], 'String');
      }
      if (data.hasOwnProperty('max')) {
        obj['max'] = ApiClient.convertToType(data['max'], 'String');
      }
    }
    return obj;
  }

  /**
   * 136px wide image. This image may be used for thumbnailing.
   * @member {String} 136
   */
  exports.prototype['136'] = undefined;
  /**
   * 540px wide image. This image may be used for thumbnailing.
   * @member {String} 540
   */
  exports.prototype['540'] = undefined;
  /**
   * 720px wide image. This image may be used for thumbnailing.
   * @member {String} 720
   */
  exports.prototype['720'] = undefined;
  /**
   * 1080px wide image. This image should be used for previews or other uses requiring clear resolution at low bandwidth.
   * @member {String} 1080
   */
  exports.prototype['1080'] = undefined;
  /**
   * 4096px wide image. This image should be used on mobile devices, as larger images may cause some devices to crash.
   * @member {String} 4096
   */
  exports.prototype['4096'] = undefined;
  /**
   * The image at a reasonably large resolution that can be used for a better desktop experience.
   * @member {String} 8192
   */
  exports.prototype['8192'] = undefined;
  /**
   * 1080px wide watermarked image. This image should be used for sharing on social media.
   * @member {String} 1080Watermarked
   */
  exports.prototype['1080Watermarked'] = undefined;
  /**
   * A 16:9 image. This image may be used for thumbnailing.
   * @member {String} 720x405
   */
  exports.prototype['720x405'] = undefined;
  /**
   * A 4:3 image. This image may be used for thumbnailing.
   * @member {String} 720x540
   */
  exports.prototype['720x540'] = undefined;
  /**
   * A 1:1 image. This image may be used for thumbnailing.
   * @member {String} 720x720
   */
  exports.prototype['720x720'] = undefined;
  /**
   * The image in its largest available size (the original size). This image should be used in third-party applications for the best experience, except on mobile devices (see `4096`).
   * @member {String} max
   */
  exports.prototype['max'] = undefined;



  return exports;
}));


