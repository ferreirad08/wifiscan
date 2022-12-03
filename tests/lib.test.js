const lib = require('../lib/index.js');

describe('Tests of getInterface function', () => {
  it('type', () => {
    const iface = lib.getInterface();
    expect(iface).toBeInstanceOf(string);
  });
});
