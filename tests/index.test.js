const { getInterface, scanNetworks } = require('../lib');

const validInterfaces = [
  'eth0',
  'wlan0'
];

describe('getInterface function', () => {
  it('output is string', () => {
    const iface = getInterface();
    expect(typeof iface).toEqual('string');
  });

  it('output is valid', () => {
    const iface = getInterface();
    expect(validInterfaces).toContain(iface);
  });
});

/*describe('scanNetworks function', () => {
  it('output is object', () => {
    const iface = getInterface();
    const networks = scanNetworks(iface);
    expect(networks).toBeInstanceOf(Object);
  });
});*/
