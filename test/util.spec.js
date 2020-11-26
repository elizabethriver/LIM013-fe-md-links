const {pathisAbsolute, validationPath, pathBecameAbsolute} = require('../lib/util.js')

const absPath = 'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test\\example\\wiki.md';
const relaPath = '../test/example/texto.tx';
const convertAbsPath = 'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test\\example\\texto.tx';
const fakePath = '../test/example/texto.js';

//TODO revisar 
describe('pathBecameAbsolute', () => {
    it('pathBecameAbsolute es una función', () => {
      expect(typeof pathBecameAbsolute).toBe('function');
    });
    it('Devuelve ruta absoluta de una relativa', () => {
      expect(pathBecameAbsolute(relaPath)).toEqual(convertAbsPath);
    });
  });

describe('validationPath', () => {
    it('validationPath es una función', () => {
      expect(typeof validationPath).toBe('function');
    });
    it('Devuelve true si es una ruta valida', () => {
      expect(validationPath(absPath)).toEqual(true);
    });
    it('Devuelve false si no es una ruta valida', () => {
      expect(validationPath(fakePath)).toEqual(false);
    });
  });

describe('pathisAbsolute', () => {
    it('pathisAbsolute es una función', () => {
      expect(typeof pathisAbsolute).toBe('function');
    });
    it('Devuelve true si es una ruta absoluta', () => {
      expect(pathisAbsolute(absPath)).toEqual(true);
    });
    it('Devuelve false si no es una ruta absoluta', () => {
      expect(pathisAbsolute(relaPath)).toEqual(false);
    });
  });

