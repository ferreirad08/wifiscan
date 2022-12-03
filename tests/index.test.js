const { getInterface, scanNetworks } = require('../lib');

describe('Tests of getInterface function', () => {
  it('type', () => {
    const iface = getInterface();
    expect(typeof iface).toEqual('string');
  });
});

describe('Tests of scanNetworks function', () => {
  it('type', () => {
    const iface = getInterface();
    const networks = scanNetworks(iface);
    expect(networks).toBeInstanceOf(Object);
  });
});
