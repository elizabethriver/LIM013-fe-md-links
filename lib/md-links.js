// Import the filesystem module 
const fs = require('fs');
 
const {validationPath, pathAbsolute} = require('./util.js');

// TODO Show if a path is validate
const mdLinks = (route) => {
    const newPromise = new Promise ((resolve, reject) =>{
            if (validationPath(route) === false) {
                reject(new Error('Error of path, please verficate your path'));               
              }
            else {                                                                                                 
                resolve( 
                    pathAbsolute(route)
                )
            }
    });
    return newPromise;
}

module.exports = mdLinks;