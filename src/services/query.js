import enums from '../enums';
import Validator from './validator';

/**
 * HTTP request query handlers provider
*/
class QueryService {
  static booleanParams = [
    'isFaceFilter',
    'hasBlendShapes',
    'requiresBlendShapes',
  ];


  static allowedParams = [
    ...QueryService.booleanParams,
    'category',
    'minimumWidth',
    'pageNum',
    'size',
    'stereoscopicType',
    'type',
  ].sort();

  /**
   * Validate query params using object schema
   * @param {Object} params - Params needed to validate
   * @throws {Error} Params are invalid
   */
  static validateParams(params) {
    if (!params) {
      return;
    }

    Validator.validateObjectSchema('Query Params', params, {allowedKeys: QueryService.allowedParams});

    Validator.validateEnumString('category', params.category, enums.category);
    Validator.validateNumber('minimumWidth', params.minimumWidth);
    Validator.validateNumber('pageNum', params.pageNum, {min: 0});
    Validator.validateNumber('size', params.size, {min: 1, max: 100});
    Validator.validateEnumString('stereoscopic type', params.stereoscopicType, enums.stereoscopicType);
    Validator.validateArrayOrSingleEnumString('type', params.type, enums.mediaType);
  }

  /**
   * Prepare query params for HTTP request
   * @param {Object=} params - Request params
   * @param {string=} params.category - Media category
   * @param {number=} params.minimumWidth - Media minimum width
   * @param {number=} params.pageNum - Page number
   * @param {number=} params.size - Page size
   * @param {string=} params.stereoscopicType - Media stereoscopic type
   * @param {(string|Array<string>)=} params.type - Media type
   * @returns {Object} Params which are ready for HTTP request
   */
  static prepareQueryParams(params) {
    const preparedParams = {...params};

    if (params && Array.isArray(params.type)) {
      preparedParams.type = params.type.join(',');
    }

    QueryService.booleanParams.forEach((key) => {
      if (preparedParams[key] !== undefined) {
        preparedParams[key] = !!preparedParams[key];
      }
    });

    return preparedParams;
  }
}

export default QueryService;
