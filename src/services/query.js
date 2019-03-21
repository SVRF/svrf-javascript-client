import enums from '../enums';
import Validator from './validator';

export default class QueryService {
  static validateParams(params) {
    if (!params) {
      return;
    }

    Validator.validateObjectSchema('Query Params', params, {
      allowedKeys: ['type', 'stereoscopicType', 'category', 'size', 'minimumWidth', 'pageNum'],
    });

    Validator.validateArrayOrSingleEnumString('type', params.type, enums.mediaType);
    Validator.validateEnumString('stereoscopic type', params.stereoscopicType, enums.stereoscopicType);
    Validator.validateEnumString('category', params.category, enums.category);
    Validator.validateNumber('size', params.size, {min: 1, max: 100});
    Validator.validateNumber('minimumWidth', params.minimumWidth);
    Validator.validateNumber('pageNum', params.pageNum, {min: 0});
  }

  static prepareQueryParams(params) {
    const preparedParams = {...params};

    if (params && Array.isArray(params.type)) {
      preparedParams.type = params.type.join(',');
    }

    return preparedParams;
  }
}
