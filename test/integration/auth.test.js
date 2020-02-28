import Svrf from '../../src';

const {SVRF_TEST_API_KEY} = process.env;

describe('authentication', () => {
  it('authenticates without errors', async () => {
    const api = new Svrf(SVRF_TEST_API_KEY, {isManualAuthentication: true});
    await api.authenticate();
  });
});
