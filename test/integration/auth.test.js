import Svrf from '../../src';
import storage from '../../src/storage';
import TokenService from '../../src/services/token';

const {SVRF_TEST_API_KEY} = process.env;
const tokenService = new TokenService(storage);

describe('authentication', () => {
  afterEach(() => {
    tokenService.clearAppTokenInfo();
  });

  it('authenticates without errors', async () => {
    const api = new Svrf(SVRF_TEST_API_KEY);
    await api.auth.authenticate();
  });
});
