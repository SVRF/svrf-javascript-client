import Validator from '../../../src/services/validator';

describe('Validator', () => {
  function valid(callback) {
    expect(callback).not.toThrow();
  }

  function error(callback) {
    expect(callback).toThrowErrorMatchingSnapshot();
  }

  describe('validateObjectSchema', () => {
    const name = 'object';
    const value = {first: 'value'};
    const allowedKeys = ['first', 'second'];

    it('throws an error if passed value is not an object', () => {
      error(() => Validator.validateObjectSchema('non-object', 'non-object', {allowedKeys: 'key'}));
    });

    it('invokes validateAllowedKeys if allowed keys are provided', () => {
      jest.spyOn(Validator, 'validateAllowedKeys').mockReturnValue();

      const keys = Object.keys(value);

      Validator.validateObjectSchema(name, value, {allowedKeys});

      expect(Validator.validateAllowedKeys).toHaveBeenCalledWith(name, keys, allowedKeys);
      Validator.validateAllowedKeys.mockRestore();
    });

    it('invokes validateRequiredKeys if required keys are provided', () => {
      jest.spyOn(Validator, 'validateRequiredKeys').mockReturnValue();

      const requiredKeys = ['first'];
      const keys = Object.keys(value);

      Validator.validateObjectSchema(name, value, {requiredKeys});

      expect(Validator.validateRequiredKeys).toHaveBeenCalledWith(name, keys, requiredKeys);

      Validator.validateRequiredKeys.mockRestore();
    });
  });

  describe('validateAllowedKeys', () => {
    const name = 'object';
    const allowedKeys = ['first', 'second'];

    it('does not throw an error if all passed keys are allowed', () => {
      valid(() => Validator.validateAllowedKeys(name, ['first', 'second'], allowedKeys));
    });

    it('does not throw an error if there is no passed keys', () => {
      valid(() => Validator.validateAllowedKeys(name, [], allowedKeys));
    });

    it('throws an error if one of passed keys is not allowed', () => {
      error(() => Validator.validateAllowedKeys(name, ['first', 'hello'], allowedKeys));
    });
  });

  describe('validateRequiredKeys', () => {
    const name = 'object';
    const requiredKeys = ['first', 'second'];

    it('does not throw an error if passed keys contain all required keys', () => {
      valid(() => Validator.validateRequiredKeys(name, ['first', 'second', 'third'], requiredKeys));
    });

    it('throws an error if passed keys do not contain all required keys', () => {
      error(() => Validator.validateRequiredKeys(name, ['first'], requiredKeys));
    });
  });

  describe('validateNumber', () => {
    const name = 'number';
    const value = 10;

    function validNumber(...args) {
      valid(() => Validator.validateNumber(name, ...args));
    }

    function errorNumber(...args) {
      error(() => Validator.validateNumber(name, ...args));
    }

    it('does not throw an error if value is not defined', () => validNumber());
    it('throws an error if value is not an integer', () => errorNumber(10.5));
    it('does not throw an error if value is bigger than min option', () => validNumber(value, {min: 5}));
    it('does not throw an error if min option is not defined', () => validNumber(value, {max: 15}));
    it('throws an error if value is less than min value', () => errorNumber(value, {min: 15}));
    it('does not throw an error if value is less than max option', () => validNumber(value, {max: 15}));
    it('does not throw an error if max option is not defined', () => validNumber(value, {min: 5}));
    it('throws an error if value is bigger than max value', () => errorNumber(value, {max: 5}));
    it('does not throw an error if min and max options are not defined', () => validNumber(value));
  });

  describe('validateEnumString', () => {
    const name = 'enum string';
    const enums = {FIRST: 'FIRST', SECOND: 'SECOND'};

    function validEnumString(...args) {
      valid(() => Validator.validateEnumString(...args));
    }

    function errorEnumString(...args) {
      error(() => Validator.validateEnumString(...args));
    }

    it('does not throw an error if value is not defined', () => validEnumString(name));
    it('throws an error if value is not a string', () => errorEnumString(name, 10));
    it('does not throw an error if passed enum values includes value', () => validEnumString(name, 'FIRST', enums));
    it('throws an error if passed enum values does not include value', () => errorEnumString(name, 'TEST', enums));
  });

  describe('validateArrayOrSingleEnumString', () => {
    const name = 'enum string array';
    const enums = {FIRST: 'FIRST', SECOND: 'SECOND'};

    beforeEach(() => {
      jest.spyOn(Validator, 'validateEnumString').mockReturnValue();
    });

    afterEach(() => {
      Validator.validateEnumString.mockRestore();
    });

    it('does not throw an error if value is not defined', () => {
      valid(() => Validator.validateArrayOrSingleEnumString(name));
    });

    it('throws an error if value is neither a string or array', () => {
      error(() => Validator.validateArrayOrSingleEnumString(name, 10));
    });

    it('validates enum string if value is string', () => {
      const value = 'FIRST';

      Validator.validateArrayOrSingleEnumString(name, value, enums);

      expect(Validator.validateEnumString).toHaveBeenCalledWith(name, value, enums);
    });

    it('validates enum string for each element in array', () => {
      const value = ['FIRST', 'SECOND'];

      Validator.validateArrayOrSingleEnumString(name, value, enums);

      expect(Validator.validateEnumString).toHaveBeenCalledTimes(value.length);
      expect(Validator.validateEnumString).toHaveBeenCalledWith(`${name}[0]`, value[0], enums);
      expect(Validator.validateEnumString).toHaveBeenCalledWith(`${name}[1]`, value[1], enums);
    });
  });

  describe('isString', () => {
    it('returns true if value is a string', () => {
      const isString = Validator.isString('test string');

      expect(isString).toEqual(true);
    });

    it('returns false if value is not a string', () => {
      const isString = Validator.isString(10);

      expect(isString).toEqual(false);
    });
  });
});
