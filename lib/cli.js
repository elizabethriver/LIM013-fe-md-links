#!/usr/bin/env node

const mdLinks = require("./md-links");
const {
  greeting,
  extractLinksPrint,
  validatestLinksPrint,
  msg,
  whiteLetter,
  blackLetter,
  pathChalk,
  hrefhChalk,
  textChalk,
  error,
  warning,
} = require("./style.js");
const process = require("process");
// const {extractLinks, validateLinks} = require('./util.js');
const {
  infoStats,
  inftoValidateStats,
  totalChalkBg,
  uniqueChalkBg,
  brokenChalkBg,
} = require("./stats.js");

// TODO Array containing any arguments you passed in
const pathEvaluated = process.argv[2];
// console.log(pathEvaluated);
const validateArgv = process.argv.indexOf("--validate") >= 0;
// console.log(validateArgv);
const statsArgv = process.argv.indexOf("--stats") >= 0;
// console.log(statsArgv);
const pathEvaluatedMsgBoxer = "The path is: " + pathEvaluated;

const blackLetterLine = blackLetter("*--------INTRUCTIONS--------*");
const help = `
${whiteLetter("WELCOME TO MD-LINKS-ERU")}

${whiteLetter(
  "You can to solve if a path of .md files contains links. Write md-links --help for help"
)}
${blackLetterLine}

${whiteLetter("1. Write md-links path: You get path of files .md")}
${pathChalk("file")} ${hrefhChalk("href")} ${textChalk("text")}

${whiteLetter("2. Write md-links path --validate: You get a validates links")}
${pathChalk("file")} ${hrefhChalk("href")} ${textChalk("text")} ${textChalk(
  "status"
)} ${textChalk("statusText")}

${whiteLetter("3. Write md-links path --stats: You get stats links")}
${totalChalkBg("Total")} 
${uniqueChalkBg("Unique")} 

${whiteLetter(
  "4. Write md-links path --stats --validate: You get stats validated links"
)}
${totalChalkBg("Total")} 
${uniqueChalkBg("Unique")}
${brokenChalkBg("Broken")}   
`;

//TODO cli
const cli = (route, validate, stats) => {
  if (route === "--help" || validate === "--help" || stats === "--help") {
    console.log(msg(help));
  }
  if (route === undefined || validate === undefined || stats === undefined) {
    console.log(msg(help));
  }
  if (validate && stats) {
    return mdLinks(route, { validate })
      .then((links) => {
        console.log(inftoValidateStats(links));
      })
      .catch(() => {
        console.log(error("There was a mistake"));
      });
  }
  if (stats) {
    return mdLinks(route, { validate })
      .then((links) => {
        console.log(infoStats(links));
      })
      .catch(() => {
        console.log(error("There was a mistake"));
      });
  }
  if (validate) {
    return mdLinks(route, { validate })
      .then((links) => {
        console.log(validatestLinksPrint(links));
      })
      .catch(() => {
        console.error(error("There was a mistake"));
      });
  }
  return mdLinks(route, { validate })
    .then((links) => {
      greeting(pathEvaluatedMsgBoxer);
      console.log(extractLinksPrint(links)), console.log(warning("All fine!"));
    })
    .catch(() => {
      console.error(error("There was a mistake"));
    });
};
cli(pathEvaluated, validateArgv, statsArgv);
