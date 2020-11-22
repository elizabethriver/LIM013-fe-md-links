#!/usr/bin/env node

const mdLinks = require('./md-links');
const greeting = require('./util.js');

// Import the filesystem module 
// const fs = require('fs'); 
// // Import path module
// const path = require('path');
// // Import modules chalk and boken
// const chalk = require("chalk");
// const boxen = require("boxen");


// TODO Array containing any arguments you passed in
const pathEvaluated = process.argv[2];
console.log('my path is: ', pathEvaluated);
// TODO Show if a path is validate
// Node.js program to demonstrate the fs.existsSync() method 

// const validationPath = (route) => fs.existsSync(route);

// const mdLinks = (route) => {
//     const newPromise = new Promise ((resolve, reject) =>{
//             if (fs.existsSync(route)) {
//                 resolve('The path exists');
//               }
//             else {                                                                                                 
//                 reject('The path not exists.');
//             }
//     });
//     return newPromise;
// }

const cli = (route) => {
    mdLinks (route)
    .then((res) => console.log( 'Se cumple la promesa ' + res))
    .catch((error) =>{
    console.error('No se cumple la promesa ' + error);
});
}
cli(pathEvaluated);

// TODO style msg to console
// const greeting = chalk.green.bold(pathEvaluated);
// const boxenOptions = {  
//  padding: 1,
//  margin: 1,
//  borderStyle: "round",
//  borderColor: "green",
//  backgroundColor: "#555555"
// };
// const msgBox = boxen( greeting, boxenOptions );
// console.log(msgBox);
greeting(pathEvaluated);
// module.exports = mdLinks;