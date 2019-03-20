export default class QueryService {
  static prepareQueryParams(params) {
    const preparedParams = {...params};

    if (params && Array.isArray(params.type)) {
      preparedParams.type = params.type.join(',');
    }

    return preparedParams;
  }
}
