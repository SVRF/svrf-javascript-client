import NumberService from '../../../src/services/number';

/* eslint-disable no-restricted-properties */

describe('NumberService', () => {
  describe('isInteger', () => {
    beforeEach(() => {
      jest.spyOn(global, 'isFinite').mockReturnValue(true);
      jest.spyOn(Math, 'floor').mockImplementation((value) => value);
    });

    afterEach(() => {
      global.isFinite.mockRestore();
      Math.floor.mockRestore();
    });

    it('returns false if passed value is not a number', () => {
      const isInteger = NumberService.isInteger('string');

      expect(isInteger).toEqual(false);
    });

    it('returns false if passed value is not finite', () => {
      global.isFinite.mockReturnValue(false);

      const isInteger = NumberService.isInteger(Infinity);

      expect(isInteger).toEqual(false);
    });

    it('returns false if passed value is not an integer', () => {
      Math.floor.mockReturnValue(5);

      const value = 5.5;
      const isInteger = NumberService.isInteger(value);

      expect(isInteger).toEqual(false);
    });

    it('returns true if passed value is actually integer', () => {
      const value = 5;

      const isInteger = NumberService.isInteger(value);
      expect(isInteger).toEqual(true);
    });
  });
});
