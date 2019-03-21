import QueryService from '../../../src/services/query';
import Validator from '../../../src/services/validator';
import enums from '../../../src/enums';

jest.mock('../../../src/services/validator');

describe('QueryService', () => {
  describe('validateParams', () => {
    afterEach(() => {
      Validator.validateObjectSchema.mockClear();
      Validator.validateArrayOrSingleEnumString.mockClear();
      Validator.validateEnumString.mockClear();
      Validator.validateNumber.mockClear();
    });

    it('does not throw an error if params are not defined', () => {
      QueryService.validateParams();

      expect(Validator.validateObjectSchema).not.toHaveBeenCalled();
    });

    it('validates params', () => {
      const params = {
        type: 'type',
        stereoscopicType: 'stereoscopicType',
        category: 'category',
        size: 10,
        minimumWidth: 100,
        pageNum: 1,
      };

      QueryService.validateParams(params);

      expect(Validator.validateObjectSchema).toHaveBeenCalledWith('Query Params', params, {
        allowedKeys: ['type', 'stereoscopicType', 'category', 'size', 'minimumWidth', 'pageNum'],
      });

      expect(Validator.validateArrayOrSingleEnumString)
        .toHaveBeenCalledWith('type', params.type, enums.mediaType);

      expect(Validator.validateEnumString)
        .toHaveBeenCalledWith('stereoscopic type', params.stereoscopicType, enums.stereoscopicType);

      expect(Validator.validateEnumString)
        .toHaveBeenCalledWith('category', params.category, enums.category);

      expect(Validator.validateNumber)
        .toHaveBeenCalledWith('size', params.size, {min: 1, max: 100});

      expect(Validator.validateNumber)
        .toHaveBeenCalledWith('minimumWidth', params.minimumWidth);

      expect(Validator.validateNumber)
        .toHaveBeenCalledWith('pageNum', params.pageNum, {min: 0});
    });
  });

  describe('prepareQueryParams', () => {
    it('returns empty object if params are not defined', () => {
      const preparedParams = QueryService.prepareQueryParams();

      expect(preparedParams).toEqual({});
    });

    it('return the same object if type is not an array', () => {
      const params = {type: 'type', category: 'category'};
      const preparedParams = QueryService.prepareQueryParams(params);

      expect(preparedParams).toEqual(params);
    });

    it('joins type array by comma', () => {
      const params = {type: ['first', 'second'], category: 'category'};
      const joinedTypes = 'first,second';
      const preparedParams = QueryService.prepareQueryParams(params);

      expect(preparedParams).toEqual({...params, type: joinedTypes});
    });
  });
});
