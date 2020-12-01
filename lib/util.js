
// Import the filesystem module
const fs = require("fs");
// Import the path module
const path = require("path");
// Node.js program to demostrate the fs.existsSync() method
const validationPath = (route) => fs.existsSync(route);
//Node.js program to demostrate the path absolute or relative
const pathisAbsolute = (route) => path.isAbsolute(route);
//Node.js program to convert a path relative to absolute
const pathBecameAbsolute = (route) => path.resolve(route);
//Node.js program to read directory
const files = (dirPath) => fs.readdirSync(dirPath);
//Node.js program to read directory
const stats = (route) => fs.statSync(route);
//Node.js program extname
const extname = (file) => path.extname(file);
//Node.js program isDirectory
const isDirectory = (dirPath) => stats(dirPath).isDirectory();
//Node.js program isFile
const isFile = (route) => stats(route).isFile();


//TODO recursive function
const getAllFiles = (dirPath, arrayOfFiles) => {
  arrayOfFiles = arrayOfFiles || [];
  files(dirPath).forEach((file) =>{
    if (isDirectory(dirPath + "/" + file)) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (extname(file) == ".md"){
        arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
      }
    }
  })
  return arrayOfFiles
}

//TODO read file
// Calling the readFileSync() method 
const readFile = (route)=> {
 const data = fs.readFileSync(route, {encoding:'utf8', flag:'r'}); 
  console.log(data);
} 

// Function to get current filenames 
// in directory with specific extension 
// const filesMd = (route) => {
//   const files = route; 
//   console.group("\Filenames with the .md extension:"); 
//   files.forEach(file => { 
//   if (path.extname(file) == ".md") 
//     console.table(file);
//     readFile(route); 
//   }) 
// }

const fileMd = (route) => {
  if (path.extname(route) == ".md"){
    console.log('it is a file.md');
    return readFile(route); 
  } else {
    console.log('you have not a file .md');
  }
} 

//TODO if a path absolute is a directory or a file
const isFileOrDiectory = (route, arrayOfFiles) =>{
  // const stats = fs.statSync(route);
  if (stats(route).isDirectory()) {
        console.group('it is a directory, you will to apply a recursive function');
        let result = getAllFiles(route, arrayOfFiles);
        console.log(result);
    } if (isFile(route)){
       if (fileMd(route)) {
        return readFile(route);
        }
    }
}

//TODO if a path absolute
const pathAbsolute = (route) => {
  if (pathisAbsolute(route) === false) {
    let newPath = pathBecameAbsolute(route);
    console.log("You had became your path to a path absolute: " + newPath);
    console.log('Is this a directory?');
    isFileOrDiectory(newPath);
   
  } else {
    console.log('Is this a directory?');
    isFileOrDiectory(route);
  }
};


module.exports = { validationPath, pathAbsolute, pathisAbsolute, pathBecameAbsolute };
