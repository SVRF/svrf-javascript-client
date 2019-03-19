import Validator from '../../../src/services/validator';

describe('Validator', () => {
  describe('validateMediaSearchOptions', () => {
    it('does not fail if options are not provided', () => {
      Validator.validateMediaSearchOptions();
    });

    it('does not fail for empty options object', () => {
      Validator.validateMediaSearchOptions({});
    });

    describe('size', () => {
      it('does not fail for valid page size', () => {
        Validator.validateMediaSearchOptions({size: 5});
      });

      it('fails for 0 page size', () => {
        expect(() => Validator.validateMediaSearchOptions({size: 0}))
          .toThrow(RangeError);
      });

      it('fails for negative page size', () => {
        expect(() => Validator.validateMediaSearchOptions({size: -42}))
          .toThrow(RangeError);
      });

      it('fails for large page size', () => {
        expect(() => Validator.validateMediaSearchOptions({size: 1000}))
          .toThrow(RangeError);
      });
    });

    describe('pageNum', () => {
      it('does not fail for valid page number', () => {
        Validator.validateMediaSearchOptions({pageNum: 5});
      });

      it('fails for negative page number', () => {
        expect(() => Validator.validateMediaSearchOptions({pageNum: -42}))
          .toThrow(RangeError);
      });
    });
  });
});
