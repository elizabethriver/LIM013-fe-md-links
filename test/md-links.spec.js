const init = require('../lib/cli.js');

describe('hola mundo que tal, hoy es un dia feliz', () => {
  it('Must be a function', () => {
    expect(typeof init).toBe('function');
  }) 
});

