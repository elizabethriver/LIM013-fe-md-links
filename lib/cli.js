#!/usr/bin/env node

const path = require('path');
// Import the filesystem module 
const fs = require('fs'); 
// Import modules chalk and boken
const chalk = require("chalk");
const boxen = require("boxen");

//TODO Array containing any arguments you passed in
const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);
// TODO Show if a path is validate
//Node.js program to demonstrate the fs.existsSync() method 

const cli = (route) =>{
    console.log(route);
}
cli(myArgs);
//TODO md-links
const mdLinks = (route) => {
    const newPromise = new Promise ((resolve, reject) =>{
            if (fs.existsSync(route) === false) {
                reject('The path is wrong');
              }
            else {                                                                                                 
                resolve('The path is not wrong.')
            }
    });
    return newPromise;
}
mdLinks();
//TODO style msg to console
const greeting = chalk.green.bold(myArgs);
const boxenOptions = {  
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};
const msgBox = boxen( greeting, boxenOptions );
console.log(msgBox);

// module.exports = mdLinks;