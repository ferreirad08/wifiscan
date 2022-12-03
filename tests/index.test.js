const { getInterface, scanNetworks } = require('../lib');

describe('getInterface function', () => {
  it('output is string', () => {
    const iface = getInterface();
    expect(typeof iface).toEqual('string');
  });
});

describe('scanNetworks function', () => {
  it('output is object', () => {
    const iface = getInterface();
    const networks = scanNetworks(iface);
    expect(networks).toBeInstanceOf(Object);
  });
});
