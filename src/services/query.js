import enums from '../enums';
import Validator from './validator';

export default class QueryService {
  static validateParams(params) {
    if (!params) {
      return;
    }

    Validator.validateObjectSchema('Query Params', params, {
      allowedKeys: [
        'category',
        'minimumWidth',
        'pageNum',
        'size',
        'stereoscopicType',
        'type',
      ],
    });

    Validator.validateEnumString('category', params.category, enums.category);
    Validator.validateNumber('minimumWidth', params.minimumWidth);
    Validator.validateNumber('pageNum', params.pageNum, {min: 0});
    Validator.validateNumber('size', params.size, {min: 1, max: 100});
    Validator.validateEnumString('stereoscopic type', params.stereoscopicType, enums.stereoscopicType);
    Validator.validateArrayOrSingleEnumString('type', params.type, enums.mediaType);
  }

  static prepareQueryParams(params) {
    const preparedParams = {...params};

    if (params && Array.isArray(params.type)) {
      preparedParams.type = params.type.join(',');
    }

    return preparedParams;
  }
}
