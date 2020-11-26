const mdlinks = require('../lib/md-links.js');


describe('hola mundo que tal, hoy es un dia feliz', () => {
  it('Must be a function', () => {
    expect(typeof mdlinks ).toBe('function');
  }) 
});

