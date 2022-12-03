const lib = require('../lib/index.js');

test('The return of getInterface function is a string', () => {
  const interface = lib.getInterface();
  expect(interface).toBeInstanceOf(String);
});
