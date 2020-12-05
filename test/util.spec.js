const {validationPath, pathisAbsolute, pathBecameAbsolute, files, stats, extname, isDirectory, isFile, fileMd, pathAbsolute, readFile, getAllFiles, isFileOrDiectory, extractLinks} = require('../lib/util.js')

//TODO paths 
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
const arrayMds =   [
  "C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test\\example\\example1\\error.md",
  'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test\\example\\example1\\mdv.md',
  'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test\\example\\wiki.md'
]
const arrayMdFile = [
  'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test\\example\\wiki.md'
]

const arrayLinks = 
[
  {
    href: 'https://marked.js.org/using_pro#rendererd',
    text: 'marked',
    path: 'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test'
  },
  {
    href: 'https://medium.com/',
    text: 'medium',
    path: 'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Wikipedia:Portada',
    text: 'wiki',
    path: 'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test'
  }
]

//TODO pathBecameAbsolute 
describe('pathBecameAbsolute', () => {
    it('pathBecameAbsolute es una función', () => {
      expect(typeof pathBecameAbsolute).toBe('function');
    });
    it('Devuelve ruta absoluta de una relativa', () => {
      expect(pathBecameAbsolute(relaPath)).toEqual(convertAbsPath);
    });
  });
//TODO validationPath 
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
//TODO pathisAbsolute 
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
//TODO files 
  describe('files', () => {
    it('files es una función', () => {
      expect(typeof files).toBe('function');
    });
    it('Devuelve files', () => {
      expect(files(directpath)).toEqual(filesReaded);
    });
  });
  //TODO extname 
  describe('extname', () => {
    it('extname es una función', () => {
      expect(typeof extname).toBe('function');
    });
    it('Devuelve la ultima extension del file', () => {
      expect(extname(fakePath)).toEqual('.js');
    });
  });
  //TODO isDirectory 
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
 //TODO isFile
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
//TODO fileMd
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
  //TODO stats
  describe('stats', () => {
    it('stats es una función', () => {
      expect(typeof stats).toBe('function');
    });
  });
  //TODO readFile
  describe('readFile', () => {
    it('readFile es una función', () => {
      expect(typeof readFile).toBe('function');
    });
    it('Devuelve texto de un file', () => {
      expect(readFile(fileMdTest)).toEqual(textFile);
    });
  });
  //TODO getAllFiles
  describe('getAllFiles', () => {
    it('getAllFiles es una función', () => {
      expect(typeof getAllFiles).toBe('function');
    });
    it('Devuelve un array', () => {
      expect(getAllFiles(directpath)).toEqual(arrayMds);
    });
  });
  //TODO pathAbsolute
  describe('pathAbsolute', () => {
    it('pathAbsolute es una función', () => {
      expect(typeof pathAbsolute).toBe('function');
    });
    it('Devuelve un path absoluto de un path absoluto', () => {
      expect(pathAbsolute(absPath)).toEqual(absPath);
    });
    it('Devuelve un path relativo de un path absoluto', () => {
      expect(pathAbsolute(fileMdTest)).toEqual(absPath);
    });
  });
  //TODO isFileOrDiectory
  describe('isFileOrDiectory', () => {
    it('isFileOrDiectory es una función', () => {
      expect(typeof isFileOrDiectory).toBe('function');
    });
    it('Devuelve texto de un file', () => {
      expect(isFileOrDiectory(directpath)).toEqual(arrayMds);
    });
    it('Devuelve texto de un file', () => {
      expect(isFileOrDiectory(absPath)).toEqual(arrayMdFile);
    });
  });
  //TODO extractLinks
  describe('extractLinks', () => {
    it('extractLinks es una función', () => {
      expect(typeof extractLinks).toBe('function');
    });
    it('Devuelve texto de un file', () => {
      expect(extractLinks(directpath)).toEqual(arrayLinks);
    });
  });
