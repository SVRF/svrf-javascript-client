import SVRF from '../../src';

const {SVRF_TEST_API_KEY} = process.env;

describe('authentication', () => {
  it('authenticates without errors', async () => {
    const api = new SVRF(SVRF_TEST_API_KEY);
    await api.auth.authenticate();
  });

  it('throws an error if api key is not provided', () => {
    expect(async () => {
      const api = new SVRF('abc');
      await api.auth.authenticate();
    }).toThrow();
  });
});
