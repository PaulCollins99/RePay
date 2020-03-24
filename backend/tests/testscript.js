const assert = require('assert');
const server = require('../server');

describe('Server Tests', () => {
  describe('printHelloWorld test', () => {
    it('Should not throw an error', () => {
      assert.doesNotThrow(server.printHelloWorld);
    });
  });
});