const { getInterface } = require('../lib/index.js');

describe('Tests of getInterface function', () => {
  it('type', () => {
    const iface = getInterface();
    expect(typeof iface).toBeInstanceOf(string);
  });
});
