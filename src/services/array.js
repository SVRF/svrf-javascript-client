/**
 * Useful array functions that are missing in IE11.
 * NOTE: These are not 100% polyfills. Their behavior may be different in some edge cases,
 * but this is enough for the current library to not overcomplicate the bundle.
 */
class ArrayService {
  /**
   * Checks if array includes a value.
   * @param {Array} array
   * @param {any} valueToFind
   * @returns {boolean} If the array contains particular value.
   */
  static includes(array, valueToFind) {
    if (!Array.isArray(array)) {
      throw new TypeError('Passed value is not an array');
    }

    return array.some((v) => v === valueToFind);
  }

  /**
   * @callback findPredicate
   * @param {any} arrayElement
   * @param {number} index
   * @param {Array} sourceArray
   */

  /**
   * Finds an element in an array.
   * @param {Array} array
   * @param {findPredicate} predicate
   * @returns {any} Found element or null if nothing found.
   */
  static find(array, predicate) {
    if (!Array.isArray(array)) {
      throw new TypeError('Passed value is not an array');
    }

    if (typeof predicate !== 'function') {
      throw new TypeError('Callback must be a function');
    }

    for (let i = 0; i < array.length; i += 1) {
      if (predicate(array[i], i, array)) {
        return array[i];
      }
    }

    return null;
  }
}

export default ArrayService;
