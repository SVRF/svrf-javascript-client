import Svrf from '../../../src/api';
import Validator from '../../../src/services/validator';
import AuthApi from '../../../src/api/auth';
import MediaApi from '../../../src/api/media';

jest.mock('../../../src/services/validator');

describe('Svrf', () => {
  const apiKey = 'key';

  it('validates storage if it is provided in options', () => {
    const storage = {};

    /* eslint-disable-next-line no-new */
    new Svrf(apiKey, {storage});

    const keys = ['get', 'set', 'clear'];

    expect(Validator.validateObjectSchema).toHaveBeenCalledWith('User Storage', storage, {
      allowedKeys: keys,
      requiredKeys: keys,
    });
  });

  it('sets all apis', () => {
    const api = new Svrf(apiKey);

    expect(api.auth).toBeInstanceOf(AuthApi);
    expect(api.media).toBeInstanceOf(MediaApi);
  });
});
