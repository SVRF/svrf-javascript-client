export default class Validator {
  static validateNumber(name, value, {min, max} = {}) {
    if (value === undefined) return;

    if (!Number.isInteger(value)) {
      throw new TypeError(`${name} should be an integer`);
    }

    if (min !== undefined && value < min) {
      throw new RangeError(`${name} should be equal or more than ${min}`);
    }

    if (max !== undefined && value > max) {
      throw new RangeError(`${name} should be equal or less than ${max}`);
    }
  }

  static validateEnumString(name, value, enumObject = {}) {
    if (value === undefined) return;

    if (!Validator.isString(value)) {
      throw new TypeError(`${name} should be a string`);
    }

    const enumValues = Object.values(enumObject);
    if (!enumValues.includes(value)) {
      throw new TypeError(`${name} should be one of the following values: ${enumValues.join(',')}`);
    }
  }

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

  static validateAllowedKeys(name, keys, allowedKeys) {
    const forbiddenKey = keys.find((k) => !allowedKeys.includes(k));
    if (forbiddenKey) {
      throw new TypeError(`${forbiddenKey} is not allowed in the ${name} schema`);
    }
  }

  static validateRequiredKeys(name, keys, requiredKeys) {
    const missingKey = requiredKeys.find((k) => !keys.includes(k));
    if (missingKey) {
      throw new TypeError(`${missingKey} is required in the ${name} schema`);
    }
  }

  static isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
  }
}
