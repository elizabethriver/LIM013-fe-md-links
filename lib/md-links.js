// Import the filesystem module 
// const { rejects } = require('assert');
// const fs = require('fs');
 
const {validationPath, extractLinks, validateLinks } = require('./util.js');

// TODO Show if a path is validate

const mdLinks = (route, options = {validate: false}) => {
    const newPromise = new Promise ((resolve, reject) =>{
        let linksExten = [];
        if (validationPath(route) === false) {
                reject(new Error('Error of path, please verficate your path'));              
              }
            else {    
                if (options.validate === true) {
                    linksExten = validateLinks(route);
                    resolve(linksExten);
                    // console.log('You got the validates links');
                }                                                                                        
                linksExten = extractLinks(route);
                resolve(linksExten);
                // console.log('You got the links');
            }
    });
    return newPromise;
};

module.exports = mdLinks;