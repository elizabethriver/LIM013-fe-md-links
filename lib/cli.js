#!/usr/bin/env node

const mdLinks = require('./md-links');
const greeting = require("./style.js");
const process = require('process');
const {extractLinks, validateLinks} = require('./util.js');
const { infoStats, inftoValidateStats} = require('./stats.js');


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
    if (validate && stats) {
        return mdLinks(route, { validate })
        .then((links) => {
            console.log(inftoValidateStats(links));
            console.log('You have stats and validate');
        })
        .catch(() => {
            console.log ('error');
        })
      }
    if (stats) {
        return mdLinks (route, { validate } )
        .then((links) => {
            console.log(infoStats(links));
            console.log('You have stats');
        })
        .catch(() => {
            console.log ('error');
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
    return mdLinks (route, { validate })
    .then(() => {
        console.log(extractLinks(route)),
        console.log( 'All fine! ')
    })
    .catch(() =>{
    console.error('There was a mistake ');
    });
}
cli(pathEvaluated, validateArgv, statsArgv );


