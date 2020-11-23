// Import modules chalk and boken
const chalk = require('chalk');
const boxen = require('boxen');
// Import the filesystem module 
const fs = require('fs'); 
// Import the path module 
const path = require('path');

// Node.js program to demonstrate the fs.existsSync() method 
const validationPath = (route) => fs.existsSync(route);

//Node.js program to demonstrate the path absolute or relative
const pathisAbsolute = (route) => path.isAbsolute(route);

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

const pathAbsolute = (route) => {
    if (pathisAbsolute(route) === false) {
        console.log('You must become a absolute path');
    } else {
        console.log('Keep going');
    }  
}


module.exports = {greeting, validationPath, pathAbsolute};