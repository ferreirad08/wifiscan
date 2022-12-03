const lib = require('../lib/index.js');

test('The return of getInterface function is a string', () => {
  expect(lib.getInterface()).toBeInstanceOf(String);
});
