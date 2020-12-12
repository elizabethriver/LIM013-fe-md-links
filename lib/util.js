// Import the filesystem module
const fs = require("fs");
// Import the path module
const path = require("path");
// Create reference instance marked
const marked = require("marked");
// Get axios
const axios = require("axios");
// Node.js program to demostrate the fs.existsSync() method
const validationPath = (route) => fs.existsSync(route);
//Node.js program to demostrate the path absolute or relative
const pathisAbsolute = (route) => path.isAbsolute(route);
//Node.js program to convert a path relative to absolute
const pathBecameAbsolute = (route) => path.resolve(route);
//Node.js program to read directory
const files = (route) => fs.readdirSync(route);
//Node.js program to files system
const stats = (route) => fs.statSync(route);
//Node.js program extname
const extname = (file) => path.extname(file);
//Node.js program isDirectory
const isDirectory = (dirPath) => stats(dirPath).isDirectory();
//Node.js program isFile
const isFile = (route) => stats(route).isFile();

//TODO recursive function
const getAllFiles = (dirPath) => {
  let arrayOfFiles = [];
  files(dirPath).forEach((file) => {
    if (isDirectory(dirPath + "/" + file)) {
      arrayOfFiles1 = getAllFiles(dirPath + "/" + file);
      arrayOfFiles = arrayOfFiles.concat(arrayOfFiles1);
    } else {
      if (extname(file) == ".md") {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });
  return arrayOfFiles;
};

//TODO read file
// Calling the readFileSync() method
const readFile = (file) => {
  const data = fs.readFileSync(file, { encoding: "utf8", flag: "r" });
  return data;
};
// TODO Function to get current filenames
// in directory with specific extension
const fileMd = (route) => {
  let arrayOfFiles = [];
  if (path.extname(route) == ".md") {
    arrayOfFiles.push(path.join(route));
    // console.log('it is a file.md');
    // return readFile(route);
  } else {
    console.log("you have not a file .md");
  }
  return arrayOfFiles;
};

//TODO if a path absolute is a directory or a file
const isFileOrDiectory = (route) => {
  let result = [];
  if (stats(route).isDirectory()) {
    // console.group('it is a directory, you will to apply a recursive function');
    result = getAllFiles(route);
    // console.log(result);
  }
  if (isFile(route)) {
    result = fileMd(route);
    // console.log(result);
  }
  // console.log(result);
  return result;
};

//TODO if a path absolute
const pathAbsolute = (route) => {
  let newPath = "";
  if (pathisAbsolute(route) === false) {
    newPath = pathBecameAbsolute(route);
    console.log("You had became your path to a path absolute: " + newPath);
    console.log("Is this a directory?");
    // isFileOrDiectory(newPath);
  } else {
    newPath = route;
    console.log("Is this a directory?");
    // isFileOrDiectory(newPath);
  }
  isFileOrDiectory(newPath);
  return newPath;
};

//TODO extraer links
const extractLinks = (route) => {
  const arrLinks = [];
  isFileOrDiectory(route).forEach((file) => {
    // const filepth = path.dirname(file);
    const filepthFinal = path.resolve(file);
    const renderer = new marked.Renderer();
    renderer.link = (href, path, text) => {
      const linksObj = {
        href,
        text,
        path: filepthFinal,
      };
      arrLinks.push(linksObj);
    };
    marked(readFile(file), { renderer });
  });
  // console.log(arrLinks);
  return arrLinks;
};

// const md = 'C:\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test\\example\\'
// const md = 'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test';
// const md = '../test/example/wiki.md';
// const link = 'C:\\Users\\ELIZABETH\\Documents\\Laboratoria\\LIM013-fe-md-links\\test\\example\\wiki.md';

//TODO Make a request for a link
const validateLinks = (route) => {
  const arryUrl = [];
  extractLinks(route).forEach((link) => {
    arryUrl.push(
      axios
        .get(link.href)
        .then((response) => {
          const urlObj = {
            ...link,
            status: response.status,
            statusText: response.statusText,
          };
          // console.log(urlObj);
          // console.log('You have links validate');
          return urlObj;
        })
        .catch((reject) => {
          const urlObj = {
            ...link,
            status: 400,
            statusText: "Fail",
          };
          // console.log(urlObj);
          // console.log('You have links not validate ' + reject);
          return urlObj;
        })
    );
  });
  return Promise.all(arryUrl);
};

module.exports = {
  validationPath,
  pathisAbsolute,
  pathBecameAbsolute,
  files,
  stats,
  extname,
  isDirectory,
  isFile,
  fileMd,
  pathAbsolute,
  readFile,
  getAllFiles,
  isFileOrDiectory,
  extractLinks,
  validateLinks,
};
