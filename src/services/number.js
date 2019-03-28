class NumberService {
  static isInteger(value) {
    return (Number.isInteger && Number.isInteger(value))
      || (typeof value === 'number'
      && isFinite(value)
      && Math.floor(value) === value);
  }
}

export default NumberService;
