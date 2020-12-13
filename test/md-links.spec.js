const mdlinks = require('../lib/md-links.js');
const axios = require('../_mocks_/axios.js');

const invalidPath = './test/example/texto.js';
const absPath = 'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test\\example\\wiki.md';
const arrayOkLinkMd = 
[
  {
    href: 'https://es.wikipedia.org/wiki/Wikipedia:Portada',
    text: 'wiki',
    path: 'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test\\example\\wiki.md',
    status: 200,
    statusText: 'OK'
  }
]
const linksArray = [
  {
    href: 'https://es.wikipedia.org/wiki/Wikipedia:Portada',
    text: 'wiki',
    path: 'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test\\example\\wiki.md'
  }
]
describe('esto retorna links validos', () => {
  it('Must be a function', () => {
    expect(typeof mdlinks ).toBe('function');
  });
  it('Es un msj de path erroneo', () => {
    mdlinks(invalidPath, { validate: false }).then((data) => {
      expect(data).reject('Error of path, please verficate your path');
      });
  });
  it('Links validados', (done) => {
    mdlinks(absPath, { validate: false }).then((data) => {
    expect(data).toStrictEqual(linksArray);
    done();
    });
  });
  // it('Links validados ok', (done) => {
  //   axios.get.mockImplementationOnce(() => Promise.resolve({ status: 200, statusText: 'OK' }));
  //   mdlinks(absPath, { validate: true }).then((data) => {
  //   expect(data).toStrictEqual(arrayOkLinkMd);
  //   done();
  //   });
  // });
});

