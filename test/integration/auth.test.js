import Svrf from '../../src';
import storage from '../../src/storage';
import TokenService from '../../src/services/token';

const {SVRF_TEST_API_KEY} = process.env;
const tokenService = new TokenService(storage);

describe('authentication', () => {
  afterEach(() => {
    tokenService.clearTokenInfo();
  });

  it('authenticates without errors', async () => {
    const api = new Svrf(SVRF_TEST_API_KEY, {isManualAuthentication: true});
    await api.authenticate();
  });
});
