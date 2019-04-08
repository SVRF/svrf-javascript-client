/**
 * Useful number functions that are missing in IE11.
 */
class NumberService {
  /**
   * Checks if value is an integer
   * @param {number} value
   * @returns {boolean} If value is an integer
   */
  static isInteger(value) {
    return typeof value === 'number'
      && isFinite(value)
      && Math.floor(value) === value;
  }
}

export default NumberService;
