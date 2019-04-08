import Svrf from '../../src';

describe('the main module', () => {
  it('exports api client', () => {
    expect(Svrf).toBeDefined();
  });

  it('exports all enums', () => {
    const {enums} = Svrf;

    expect(enums).toBeDefined();

    expect(enums.category).toBeDefined();
    expect(enums.mediaType).toBeDefined();
    expect(enums.stereoscopicType).toBeDefined();
  });
});
