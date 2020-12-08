#!/usr/bin/env node

const mdLinks = require('./md-links');
const greeting = require("./style.js");
const process = require('process');
const {extractLinks, validateLinks} = require('./util.js');


// TODO Array containing any arguments you passed in
const pathEvaluated = process.argv[2];
console.log(pathEvaluated);
const validateArgv = process.argv.indexOf('--validate') > 0;
console.log(validateArgv);
const pathEvaluatedMsgBoxer = 'The path is: ' + pathEvaluated;

// TODO style msg to console
// greeting(pathEvaluated);
greeting(pathEvaluatedMsgBoxer);

//TODO cli 

const cli = (route, validate) => {
    if ( validate ) {
        return mdLinks (route, {validate} )
        .then((links) => {
        console.log(validateLinks(links));
        console.log('You got the links');
        })
        .catch(() => {
            console.log('');
        })
    }    
    return mdLinks (route, {validate})
    .then(() => 
    console.log(extractLinks(route)),
    console.log( 'This path exists '))
    .catch((error) =>{
    console.error('There was a mistake ' + error);
});
}
cli(pathEvaluated, validateArgv);



