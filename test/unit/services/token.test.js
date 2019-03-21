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

  it('gets app token', () => {
    const appTokenInfo = {appToken: 'appToken'};
    jest.spyOn(tokenService, 'getInfoFromStorage').mockReturnValue(appTokenInfo);

    const appToken = tokenService.getAppToken();

    expect(tokenService.getInfoFromStorage).toHaveBeenCalled();
    expect(appToken).toEqual(appTokenInfo.appToken);

    tokenService.getInfoFromStorage.mockRestore();
  });

  it('sets app token info', () => {
    const now = Date.now();
    jest.spyOn(Date, 'now').mockReturnValue(now);

    const appTokenInfo = {appToken: 'appToken', expiresIn: 100};

    tokenService.setAppTokenInfo(appTokenInfo);

    expect(Date.now).toHaveBeenCalled();
    expect(storage.set).toHaveBeenCalledWith({
      appToken: appTokenInfo.appToken,
      expirationTime: now + appTokenInfo.expiresIn,
    });

    Date.now.mockRestore();
  });

  it('clears storage', () => {
    tokenService.clearAppTokenInfo();

    expect(storage.clear).toHaveBeenCalled();
  });

  describe('isTokenValid', () => {
    const now = Date.now();
    const appTokenInfo = {appToken: 'appToken', expirationTime: 100};

    beforeEach(() => {
      jest.spyOn(Date, 'now').mockReturnValue(now);
      jest.spyOn(tokenService, 'getInfoFromStorage').mockReturnValue(appTokenInfo);
    });

    afterEach(() => {
      Date.now.mockRestore();
      tokenService.getInfoFromStorage.mockRestore();
    });

    it('invokes getInfoFromStorage', () => {
      tokenService.isTokenValid();

      expect(tokenService.getInfoFromStorage).toHaveBeenCalled();
    });

    it('returns false if appToken is not defined', () => {
      tokenService.getInfoFromStorage.mockReturnValue({expiresIn: 100});
      const isTokenValid = tokenService.isTokenValid();

      expect(isTokenValid).toEqual(false);
    });

    it('returns false if expirationTime is not defined', () => {
      tokenService.getInfoFromStorage.mockReturnValue({appToken: 'appToken'});
      const isTokenValid = tokenService.isTokenValid();

      expect(isTokenValid).toEqual(false);
    });

    it('returns false if expiration time is less than current time', () => {
      Date.now.mockReturnValue(150);
      const isTokenValid = tokenService.isTokenValid();

      expect(isTokenValid).toEqual(false);
    });

    it('returns true if expiration time is bigger than current time', () => {
      Date.now.mockReturnValue(50);
      const isTokenValid = tokenService.isTokenValid();

      expect(isTokenValid).toEqual(true);
    });
  });

  describe('getInfoFromStorage', () => {
    it('invokes storage get method', () => {
      tokenService.getInfoFromStorage();

      expect(storage.get).toHaveBeenCalled();
    });

    it('returns an object which was returned by storage', () => {
      const testObject = {ket: 'value'};

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
