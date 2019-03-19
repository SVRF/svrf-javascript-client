class Validator {
  static checkMediaRequestOptions(options) {
    if (!options) {
      return;
    }

    if (options.size && (options.size < 1 || options.size > 100)) {
      throw new Error('size should be between 1 and 100');
    }

    if (options.pageNum && options.pageNum < 0) {
      throw new Error('pageNum should not be negative');
    }
  }
}

export default Validator;
