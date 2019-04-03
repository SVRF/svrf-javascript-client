import NumberService from './number';
import ArrayService from './array';

/**
 * Service for validating values
*/
class Validator {
  /**
   * Validate integer number
   * @param {string} name - Name of validating value
   * @param {number} value - Checked value
   * @param {{min: number=, max: number=}=} range - Specify valid range for number
   * @throws {TypeError} Provided value should be an integer
   * @throws {RangeError} Provided value should be equal or more than min in range
   * @throws {RangeError} Provided value should be equal or less than max in range
   */
  static validateNumber(name, value, {min, max} = {}) {
    if (value === undefined) return;

    if (!NumberService.isInteger(value)) {
      throw new TypeError(`${name} should be an integer`);
    }

    if (min !== undefined && value < min) {
      throw new RangeError(`${name} should be equal or more than ${min}`);
    }

    if (max !== undefined && value > max) {
      throw new RangeError(`${name} should be equal or less than ${max}`);
    }
  }

  /**
   * Validate string which must be in enum
   * @param {string} name - Name of validating value
   * @param {string} value - Checked value
   * @param {Object.<string, string>} enumObject - Checked enum
   * @throws {TypeError} Provided value should be a string
   * @throws {TypeError} Provided value should be one of enum
   */
  static validateEnumString(name, value, enumObject = {}) {
    if (value === undefined) return;

    if (!Validator.isString(value)) {
      throw new TypeError(`${name} should be a string`);
    }

    const enumKeys = Object.keys(enumObject);
    const enumValues = enumKeys.map((enumKey) => enumObject[enumKey]);

    if (!ArrayService.includes(enumValues, value)) {
      throw new TypeError(`${name} should be one of the following values: ${enumValues.join(',')}`);
    }
  }

  /**
   * Validate string or array of strings which must be in enum
   * @param {string} name - Name of validating value
   * @param {string|Array<string>} value - Checked value
   * @param {Object.<string, string>} enumObject - Checked enum
   * @throws {TypeError} Provided value should be either an array or a string
   */
  static validateArrayOrSingleEnumString(name, value, enumObject) {
    if (value === undefined) return;

    if (Validator.isString(value)) {
      Validator.validateEnumString(name, value, enumObject);
      return;
    }

    if (!Array.isArray(value)) {
      throw new TypeError(`${name} should be either an array or a string`);
    }

    value.forEach((element, index) => (
      Validator.validateEnumString(`${name}[${index}]`, element, enumObject)
    ));
  }

  /**
   * Validate object schema
   * @param {string} name - Name of validating value
   * @param {Object} value - Checked value
   * @param {Object} options - Object keys restrictions
   * @param {Array<string>} options.allowedKeys - List of allowed keys in object
   * @param {Array<string>} options.requiredKeys - List of required keys in object
   * @throws {TypeError} Provided value should be an object
   */
  static validateObjectSchema(name, value, {allowedKeys, requiredKeys}) {
    if (typeof value !== 'object') {
      throw new TypeError(`${name} should be an object`);
    }

    const keys = Object.keys(value);

    if (allowedKeys) {
      Validator.validateAllowedKeys(name, keys, allowedKeys);
    }

    if (requiredKeys) {
      Validator.validateRequiredKeys(name, keys, requiredKeys);
    }
  }

  /**
   * Validate object schema
   * @param {string} name - Name of validating value
   * @param {Object} value - Checked value
   * @param {Array<string>} allowedKeys - List of allowed keys in object
   * @throws {TypeError} Some key is not allowed in the object schema
   */
  static validateAllowedKeys(name, keys, allowedKeys) {
    const forbiddenKey = ArrayService.find(keys, (k) => !ArrayService.includes(allowedKeys, k));
    if (forbiddenKey) {
      throw new TypeError(`${forbiddenKey} is not allowed in the ${name} schema`);
    }
  }

  /**
   * Validate object schema
   * @param {string} name - Name of validating value
   * @param {Object} value - Checked value
   * @param {Array<string>} requiredKeys - List of required keys in object
   * @throws {TypeError} Some key is required in the object schema
   */
  static validateRequiredKeys(name, keys, requiredKeys) {
    const missingKey = ArrayService.find(requiredKeys, (k) => !ArrayService.includes(keys, k));
    if (missingKey) {
      throw new TypeError(`${missingKey} is required in the ${name} schema`);
    }
  }

  /**
   * Check is value string or not
   * @param {any} value - Checked value
   * @returns {boolean} Is value string or not
   */
  static isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
  }
}

export default Validator;
