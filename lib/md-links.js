// Import the filesystem module 
const fs = require('fs');
 
// TODO Show if a path is validate
const mdLinks = (route) => {
    const newPromise = new Promise ((resolve, reject) =>{
            if (fs.existsSync(route)) {
                resolve('The path exists');
              }
            else {                                                                                                 
                reject('The path not exists.');
            }
    });
    return newPromise;
}

module.exports = mdLinks;