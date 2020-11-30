
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


//TODO recursive function
const getAllFiles = function(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

//TODO read directory
// Function to get current filenames 
// in directory
// const  filenamesDirectory = (route) =>{
//   // Function to get current filenames in directory with "withFileTypes" set to "true"  
//     const fileObjs = fs.readdirSync(route, { withFileTypes: true });  
//     fileObjs.forEach(file => { 
//       console.table(file); 
//     }); 
//   }

//TODO read file
const readFile = (route) => {
  fs.readFile(route, 'utf8' , (err, data) => {
    if (err) {
      console.error(err);
      return
    }
    console.log(data);
  });
}
// Function to get current filenames 
// in directory with specific extension 
const filesMd = (route) => {
  const files = fs.readdirSync(route); 
  console.group("\Filenames with the .md extension:"); 
  files.forEach(file => { 
  if (path.extname(file) == ".md") 
    console.table(file);
    readFile(route); 
  }) 
}


//TODO if a path absolute is a directory or a file
const isFileOrDiectory = (route) =>{
  const stats = fs.statSync(route);
  if (stats.isDirectory()) {
        console.group('it is a directory, you will to apply a recursive function');
        // filenamesDirectory(route);
        // filesMd(route);
        const result = getAllFiles(route);
        console.log(result);
    } if (stats.isFile()){
      //  if (filesMd(route)) {
      //    console.log('you have a file .md')
      //    readFile(route);
         console.log('it is a file');
    //    } else {
    //     console.log('no hay archivo .md')
    //    }
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
