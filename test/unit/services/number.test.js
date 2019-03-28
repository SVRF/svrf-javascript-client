import NumberService from '../../../src/services/number';

/**
 * @jest-environment node
 */

describe('NumberService', () => {
  describe('isInteger', () => {
    const numberIsInteger = Number.isInteger;
    const mockValue = 2;

    beforeEach(() => {
      jest.spyOn(global, 'isFinite').mockReturnValue(true);
      jest.spyOn(Math, 'floor').mockImplementation((value) => value);
      Number.isInteger = undefined;
    });

    afterEach(() => {
      global.isFinite.mockRestore(); // eslint-disable-line no-restricted-properties
      Math.floor.mockRestore();
      Number.isInteger = numberIsInteger;
    });

    it('invokes Number.isInteger if it exists', () => {
      Number.isInteger = jest.fn();

      NumberService.isInteger(mockValue);

      expect(Number.isInteger).toHaveBeenCalled();

      Number.isInteger.mockRestore();
    });

    it('returns false if passed value is not a number', () => {
      const isInteger = NumberService.isInteger('string');

      expect(isInteger).toEqual(false);
    });

    it('returns false if passed value is not finite', () => {
      global.isFinite.mockReturnValue(false); // eslint-disable-line no-restricted-properties

      const isInteger = NumberService.isInteger(Infinity);

      expect(isInteger).toEqual(false);
    });

    it('returns false if passed value is not an integer', () => {
      Math.floor.mockReturnValue(5);

      const value = 5.5;
      const isInteger = NumberService.isInteger(value);

      expect(isInteger).toEqual(false);
    });

    it('invokes isFinite if Number.isInteger is not defined', () => {
      NumberService.isInteger(mockValue);

      expect(global.isFinite).toHaveBeenCalled(); // eslint-disable-line no-restricted-properties
    });

    it('invokes Math.floor if Number.isInteger is not defined', () => {
      NumberService.isInteger(mockValue);

      expect(Math.floor).toHaveBeenCalled();
    });
  });
});
