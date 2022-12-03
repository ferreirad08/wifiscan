const lib = require('../lib/index.js');

describe('The return of getInterface function is a string', () => {
  it(() => {
    const interface = lib.getInterface();
    expect(interface).toBeInstanceOf(String);
  });
});
