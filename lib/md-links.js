const { validationPath, extractLinks, validateLinks } = require("./util.js");

// TODO Show if a path is validate

const mdLinks = (route, options = { validate: false }) => {
  const newPromise = new Promise((resolve, reject) => {
    let linksExten = [];
    if (validationPath(route) === false) {
      reject("Error of path, please verficate your path");
    } else {
      if (options.validate === true) {
        linksExten = validateLinks(route);
        resolve(linksExten);
      }
      linksExten = extractLinks(route);
      resolve(linksExten);
    }
  });
  return newPromise;
};

module.exports = mdLinks;
