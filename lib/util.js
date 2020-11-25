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
// Use statSync() method to store the returned instance into variable named stats

// // Use isFile() method to log the result to the screen
// const isFile = (route) => {stats.isFile()};
// // Use isDirectory() method to log the result to screen
// const isDirectory = (route) => {stats.isDirectory()};

//TODO if a path absolute is a directory or a file
const isFileOrDiectory = (route) =>{
  const stats = fs.statSync(route);
  if (stats.isDirectory()) {
        console.log('it is a directory');
    } if (stats.isFile()){
        console.log('it is not a directory, keep going');
    }
}

// Use statSync() method to store the returned
// instance into variable named stats
// const stats = (route) => fs.statSync(route);

// // Use isFile() method to log the result to screen
// console.log("is file ? " + stats.isFile());

// // Use isDirectory() method to log the result to screen
// console.log("is directory ? " + stats.isDirectory());

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
    console.log("Keeping going working");
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

module.exports = { greeting, validationPath, pathAbsolute };
