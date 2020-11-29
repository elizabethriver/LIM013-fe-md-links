// Import modules chalk and boken
const chalk = require("chalk");
const boxen = require("boxen");
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

  //TODO read directory
// Function to get current filenames 
// in directory
const  filenamesDirectory = (route) =>{
// Function to get current filenames in directory with "withFileTypes" set to "true"  
  const fileObjs = fs.readdirSync(route, { withFileTypes: true });  
  fileObjs.forEach(file => { 
    console.log(file); 
  }); 
}
    

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

//TODO if a path absolute is a directory or a file
const isFileOrDiectory = (route) =>{
  const stats = fs.statSync(route);
  if (stats.isDirectory()) {
        console.log('it is a directory, you must go to the recursive function');
        filenamesDirectory(route);
    } if (stats.isFile()){
        readFile(route);
        console.log('it is not a directory, it is a file, keep going');
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

// TODO style msg to console
const greeting = (pathEvaluated) => {
  const greetings = chalk.green.bold(pathEvaluated);
  const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555",
  };
  const msgBox = boxen(greetings, boxenOptions);
  console.log(msgBox);
};

module.exports = { greeting, validationPath, pathAbsolute, pathisAbsolute, pathBecameAbsolute };
