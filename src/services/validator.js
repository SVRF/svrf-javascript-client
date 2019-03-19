class Validator {
  static validateStorage({get, set, remove}) {
    if (get && set && remove) {
      return;
    }

    throw new Error('You should implement all storage methods (get, set, remove)');
  }

  static validateMediaSearchOptions(options) {
    if (!options) {
      return;
    }

    if (options.size < 1 || options.size > 100) {
      throw new RangeError('size should be between 1 and 100');
    }

    if (options.pageNum < 0) {
      throw new RangeError('pageNum should not be negative');
    }
  }
}

export default Validator;
