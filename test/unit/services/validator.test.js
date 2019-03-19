import Validator from '../../../src/services/validator';
import enums from '../../../src/enums';

describe('Validator', () => {
  describe('validateMediaSearchOptions', () => {
    function valid(options) {
      Validator.validateMediaSearchOptions(options);
    }

    function error(options) {
      expect(() => Validator.validateMediaSearchOptions(options))
        .toThrowErrorMatchingSnapshot();
    }

    it('passes if options are not provided', () => valid());
    it('passes for empty options object', () => valid({}));
    it('fails for invalid fields', () => error({sizeeeee: 5}));

    describe('category', () => {
      it('passes for allowed category', () => valid({category: enums.category.FACE_FILTERS}));
      it('fails for invalid category', () => error({category: 'face filterz'}));
    });

    describe('minimumWidth', () => {
      it('passes for valid width', () => valid({minimumWidth: 500}));
    });

    describe('stereoscopicType', () => {
      it('passes for allowed stereotype', () => (
        valid({stereoscopicType: enums.stereoscopicType.TOP_BOTTOM})
      ));
      it('fails for invalid stereotype', () => error({stereoscopicType: 'top down'}));
    });

    describe('type', () => {
      it('passes for allowed media type single value', () => (
        valid({type: enums.mediaType.PHOTO})
      ));
      it('passes for allowed media type multiple value', () => (
        valid({type: [enums.mediaType.PHOTO, enums.mediaType.VIDEO]})
      ));

      it('fails for invalid media type single value', () => error({type: 'photoz'}));
      it('fails for invalid media type multiple value', () => (
        error({type: ['photoz', 'videoz']})
      ));
      it('fails if one of the types is invalid', () => (
        error({type: [enums.mediaType.PHOTO, 'videoz']})
      ));
    });

    describe('pageNum', () => {
      it('passes for valid page number', () => valid({pageNum: 5}));
      it('fails for negative page number', () => error({pageNum: -42}));
    });

    describe('size', () => {
      it('passes for valid page size', () => valid({size: 5}));
      it('fails for 0 page size', () => error({size: 0}));
      it('fails for negative page size', () => error({size: -42}));
      it('fails for large page size', () => error({size: 1000}));
    });
  });
});
