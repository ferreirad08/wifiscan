const { getInterface } = require('../lib');

describe('Tests of getInterface function', () => {
  it('type', () => {
    const iface = getInterface();
    expect(typeof iface).toBeInstanceOf(string);
  });
});
