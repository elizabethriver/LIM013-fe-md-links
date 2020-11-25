// Import modules chalk and boken
const chalk = require('chalk');
const boxen = require('boxen');
// Import the filesystem module 
const fs = require('fs'); 
// Import the path module 
const path = require('path');

// Node.js program to demostrate the fs.existsSync() method 
const validationPath = (route) => fs.existsSync(route);
//Node.js program to demostrate the path absolute or relative
const pathisAbsolute = (route) => path.isAbsolute(route);
//Node.js program to convert a path relative to absolute
const pathBecameAbsolute = (route) => path.resolve(route);

const pathAbsolute = (route) => {
    if (pathisAbsolute(route) === false) {
        let newPath = pathBecameAbsolute(route);
        console.log('You had became your path to a path absolute: ' + newPath);
    } else {
        console.log('Keeping going working');
    }  
}

// TODO style msg to console
const greeting = (pathEvaluated) => {   
    const greetings = chalk.green.bold(pathEvaluated);
    const boxenOptions = {  
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: "green",
        backgroundColor: "#555555"
       };
       const msgBox = boxen( greetings, boxenOptions );
       console.log(msgBox);
} 

module.exports = {greeting, validationPath, pathAbsolute};