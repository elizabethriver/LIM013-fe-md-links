const {validationPath, pathisAbsolute, pathBecameAbsolute, files, stats, extname, isDirectory, isFile, fileMd, pathAbsolute, readFile} = require('../lib/util.js')

const absPath = 'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test\\example\\wiki.md';
const relaPath = './test/example/texto.tx';
const convertAbsPath = 'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test\\example\\texto.tx';
const fakePath = '../test/example/texto.js';
const filesReaded = ["example", "md-links.spec.js", "util.spec.js"];
const directpath = 'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test\\';
const arrayFileMD = ['test\\example\\wiki.md'];
const fileMdTest = './test/example/wiki.md';
const arrayEmpty = [];
const textFile = '[wiki](https://es.wikipedia.org/wiki/Wikipedia:Portada)';

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

  describe('files', () => {
    it('files es una función', () => {
      expect(typeof files).toBe('function');
    });
    it('Devuelve files', () => {
      expect(files(directpath)).toEqual(filesReaded);
    });
  });

  describe('extname', () => {
    it('extname es una función', () => {
      expect(typeof extname).toBe('function');
    });
    it('Devuelve la ultima extension del file', () => {
      expect(extname(fakePath)).toEqual('.js');
    });
  });

  describe('isDirectory', () => {
    it('isDirectory es una función', () => {
      expect(typeof isDirectory).toBe('function');
    });
    it('Devuelve true si es una ruta valida', () => {
      expect(isDirectory(directpath)).toEqual(true);
    });
    it('Devuelve false si no es una ruta valida', () => {
      expect(isDirectory(absPath)).toEqual(false);
    });
  });

  describe('isFile', () => {
    it('isFile es una función', () => {
      expect(typeof isFile).toBe('function');
    });
    it('Devuelve true si es una ruta valida', () => {
      expect(isFile(absPath)).toEqual(true);
    });
    it('Devuelve false si no es una ruta valida', () => {
      expect(isFile(directpath)).toEqual(false);
    });
  });

  describe('fileMd', () => {
    it('fileMd es una función', () => {
      expect(typeof fileMd).toBe('function');
    });
    it('Devuelve un array de .md file', () => {
      expect(fileMd(fileMdTest)).toEqual(arrayFileMD);
    });
    it('Devuelve un array vacio porque no hay .md file', () => {
      expect(fileMd(relaPath)).toEqual(arrayEmpty);
    });
  });
  describe('stats', () => {
    it('stats es una función', () => {
      expect(typeof stats).toBe('function');
    });
  });
  describe('readFile', () => {
    it('stats es una función', () => {
      expect(typeof readFile).toBe('function');
    });
    it('Devuelve texto de un file', () => {
      expect(readFile(fileMdTest)).toEqual(textFile);
    });
  });
