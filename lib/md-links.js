// Import the filesystem module 
const fs = require('fs');
 
const {validationPath, extractLinks} = require('./util.js');

// TODO Show if a path is validate
const mdLinks = (route) => {
    const newPromise = new Promise ((resolve, reject) =>{
        let extLinks = [];
        if (validationPath(route) === false) {
                reject(new Error('Error of path, please verficate your path'));               
              }
            else {                                                                                                 
                extLinks = extractLinks(route);
                resolve( extLinks );
                console.log('You got the links')
            }
    });
    return newPromise;
};

module.exports = mdLinks;