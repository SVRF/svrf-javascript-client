import TokenService from '../../../src/services/token';
import storage from '../../../src/storage';

jest.mock('../../../src/storage');

describe('TokenService', () => {
  let tokenService;

  beforeAll(() => {
    tokenService = new TokenService(storage);
  });

  afterEach(() => {
    storage.get.mockReset();
    storage.set.mockReset();
    storage.clear.mockReset();
  });

  it('gets token', () => {
    const tokenInfo = {appToken: 'appToken'};
    jest.spyOn(tokenService, 'getInfoFromStorage').mockReturnValue(tokenInfo);

    const appToken = tokenService.getToken();

    expect(tokenService.getInfoFromStorage).toHaveBeenCalled();
    expect(appToken).toEqual(tokenInfo.token);

    tokenService.getInfoFromStorage.mockRestore();
  });

  it('sets token info', () => {
    const expiresAt = Date.now() + 10000;

    const tokenInfo = {token: 'appToken', expiresAt};

    tokenService.setTokenInfo(tokenInfo);

    expect(storage.set).toHaveBeenCalledWith({
      token: tokenInfo.token,
      expiresAt,
    });
  });

  it('clears storage', () => {
    tokenService.clearTokenInfo();

    expect(storage.clear).toHaveBeenCalled();
  });

  describe('isTokenValid', () => {
    const now = Date.now();
    const tokenInfo = {token: 'appToken', expiresAt: now + 10000};

    beforeEach(() => {
      jest.spyOn(Date, 'now').mockReturnValue(now);
      jest.spyOn(tokenService, 'getInfoFromStorage').mockReturnValue(tokenInfo);
    });

    afterEach(() => {
      Date.now.mockRestore();
      tokenService.getInfoFromStorage.mockRestore();
    });

    it('invokes getInfoFromStorage', () => {
      tokenService.isTokenValid();

      expect(tokenService.getInfoFromStorage).toHaveBeenCalled();
    });

    it('returns true if everything is ok', () => {
      const isTokenValid = tokenService.isTokenValid();

      expect(isTokenValid).toEqual(true);
    });

    it('returns false if appToken is not defined', () => {
      tokenService.getInfoFromStorage.mockReturnValue({expiresAt: tokenInfo.expiresAt});
      const isTokenValid = tokenService.isTokenValid();

      expect(isTokenValid).toEqual(false);
    });

    it('returns false if expiresAt is not defined', () => {
      tokenService.getInfoFromStorage.mockReturnValue({token: tokenInfo.token});
      const isTokenValid = tokenService.isTokenValid();

      expect(isTokenValid).toEqual(false);
    });

    it('returns false if expiresAt is less than current time', () => {
      Date.now.mockReturnValue(tokenInfo.expiresAt + 100);
      const isTokenValid = tokenService.isTokenValid();

      expect(isTokenValid).toEqual(false);
    });
  });

  describe('getInfoFromStorage', () => {
    it('invokes storage get method', () => {
      tokenService.getInfoFromStorage();

      expect(storage.get).toHaveBeenCalled();
    });

    it('returns an object which was returned by storage', () => {
      const testObject = {key: 'value'};

      storage.get.mockReturnValue(testObject);

      const info = tokenService.getInfoFromStorage();

      expect(info).toEqual(testObject);
    });

    it('returns empty object if storage get method returns falsy', () => {
      storage.get.mockReturnValue = undefined;

      const info = tokenService.getInfoFromStorage();

      expect(info).toEqual({});
    });
  });
});
