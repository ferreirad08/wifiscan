const lib = require('../lib/index.js');

describe('Tests of getInterface function', () => {
  it('type', () => {
    const interface = lib.getInterface();
    expect(interface).toBeInstanceOf(String);
  });
});
