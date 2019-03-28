import ArrayService from '../../../src/services/array';

describe('ArrayService', () => {
  describe('includes', () => {
    const valueToFind = 2;

    function expectIncludeValueToFind(array, expectedValue) {
      expect(ArrayService.includes(array, valueToFind)).toEqual(expectedValue);
    }

    it('throws an error if array is null', () => {
      expect(() => ArrayService.includes(null, valueToFind)).toThrowErrorMatchingSnapshot();
    });

    it('throws an error if array is not defined', () => {
      expect(() => ArrayService.includes()).toThrowErrorMatchingSnapshot();
    });

    it('throws an error if passed value is not array', () => {
      expect(() => ArrayService.includes(2, valueToFind)).toThrowErrorMatchingSnapshot();
    });

    it('returns false if length of array is zero', () => {
      const array = [];
      expectIncludeValueToFind(array, false);
    });

    it('returns true if value to find is in array and from index is not defined', () => {
      const array = [1, 2, 3];
      expectIncludeValueToFind(array, true);
    });

    it('returns false if value to find is not in array and from index is not defined', () => {
      const array = [1, 3, 4];
      expectIncludeValueToFind(array, false);
    });
  });

  describe('find', () => {
    it('throws an error if array is null', () => {
      expect(() => ArrayService.find(null)).toThrowErrorMatchingSnapshot();
    });

    it('throws an error if array is not defined', () => {
      expect(() => ArrayService.find()).toThrowErrorMatchingSnapshot();
    });

    it('throws an error if passed value is not array', () => {
      expect(() => ArrayService.find(2)).toThrowErrorMatchingSnapshot();
    });

    it('throws an error if passed callback is not a function', () => {
      expect(() => ArrayService.find([], 2)).toThrowErrorMatchingSnapshot();
    });

    it('returns null if array is empty', () => {
      const array = [];
      const callback = jest.fn();
      const foundValue = ArrayService.find(array, callback);

      expect(foundValue).toEqual(null);
      expect(callback).not.toHaveBeenCalled();
    });

    it('returns null if callback always return false', () => {
      const array = [1, 2, 3];
      const callback = jest.fn().mockReturnValue(false);
      const foundValue = ArrayService.find(array, callback);

      expect(foundValue).toEqual(null);
      expect(callback).toHaveBeenCalledTimes(array.length);
    });

    it('returns the first item in array if callback always return true', () => {
      const array = [1, 2, 3];
      const callback = jest.fn().mockReturnValue(true);
      const foundValue = ArrayService.find(array, callback);

      expect(foundValue).toEqual(array[0]);
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('returns value if callback returned value is true with it value', () => {
      const mockValue = 2;
      const array = [1, 2, 3];
      const mockValueIndex = array.indexOf(mockValue) + 1;
      const callback = jest.fn().mockImplementation((value) => value === mockValue);
      const foundValue = ArrayService.find(array, callback);

      expect(foundValue).toEqual(mockValue);
      expect(callback).toHaveBeenCalledTimes(mockValueIndex);
    });
  });
});
