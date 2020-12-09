#!/usr/bin/env node

const mdLinks = require('./md-links');
const greeting = require("./style.js");
const process = require('process');
const {extractLinks, validateLinks} = require('./util.js');
const totalLinks = require('./stats.js');


// TODO Array containing any arguments you passed in
const pathEvaluated = process.argv[2];
console.log(pathEvaluated);
const validateArgv = process.argv.indexOf('--validate') >= 0;
console.log(validateArgv);
const statsArgv = process.argv.indexOf('--stats') >= 0;
console.log(statsArgv);
const pathEvaluatedMsgBoxer = 'The path is: ' + pathEvaluated;

// TODO style msg to console
// greeting(pathEvaluated);
greeting(pathEvaluatedMsgBoxer);

//TODO cli 

const cli = (route, validate, stats ) => {
    if (stats) {
        return mdLinks (route, {stats} )
        .then((links) => {
            console.log (links + 'links');
            totalLinks(links);
            console.log('hiciste algo');
        })
        .catch(() => {
            console.log ('links');
        })
    }
    if ( validate ) {
        return mdLinks (route, {validate} )
        .then((links) => {
        console.log(validateLinks(links));
        console.log('You got the links validate');
        })
        .catch(() => {
        console.error('Ok');
        })
    }    
    return mdLinks (route)
    .then(() => 
    console.log(extractLinks(route)),
    console.log( 'All fine! '))
    .catch(() =>{
    console.error('There was a mistake ');
    });
}
cli(pathEvaluated, validateArgv, statsArgv );


// let newSet = new Set().add(1).add(2).add(1);
// console.time();
// console.log(newSet);
// console.log(newSet.size);
// console.timeEnd();



// let newSet = new Set([0, 1, 2, 5, 2, 1, 0]);
// let uniqueArray1 = [... new Set(newSet)];
// let total = newSet.size;



// console.time();
// console.log(newSet);
// console.log(total);
// console.log(uniqueArray1);
// // console.log(uniqueArray);

// console.timeEnd();
