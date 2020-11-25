#!/usr/bin/env node

const mdLinks = require('./md-links');
const {greeting} = require('./util.js');

// TODO Array containing any arguments you passed in
const pathEvaluated = process.argv[2];
const pathEvaluatedMsgBoxer = 'The path is: ' + pathEvaluated;
// TODO style msg to console
// greeting(pathEvaluated);
greeting(pathEvaluatedMsgBoxer);

//TODO cli 
const cli = (route) => {
    mdLinks (route)
    .then(() => console.log( 'This path exists '))
    .catch((error) =>{
    console.error('There was a mistake ' + error);
});
}
cli(pathEvaluated);


