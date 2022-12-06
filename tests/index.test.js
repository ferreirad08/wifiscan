const { getInterface, scanNetworks, wifiAnalyzer } = require('../lib');
const { execSync } = require('child_process');

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

describe('scanNetworks function', () => {
  it('output is object', () => {
    const iface = getInterface();
    const networks = scanNetworks(iface);
    expect(networks).toBeInstanceOf(Object);
  });
});

describe('wifiAnalyzer function', () => {
  it('output of scanNetworks endpoint is object', () => {
    wifiAnalyzer(3000);
    networks = JSON.parse(execSync(`curl http://localhost:3000/scanNetworks`));
    expect(networks).toBeInstanceOf(Object);
  });
});
