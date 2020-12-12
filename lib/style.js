// Import modules chalk and boken
const chalk = require("chalk");
const boxen = require("boxen");

// TODO style msg to console
const greeting = (pathEvaluated) => {
  const greetings = chalk.black.bold(pathEvaluated);
  const boxenOptions = {
    padding: 1,
    margin: 1,
    align: "center",
    borderStyle: "classic",
    borderColor: "magenta",
    backgroundColor: "#fdea9e",
  };
  const msgBox = boxen(greetings, boxenOptions);
  console.log(msgBox);
};

const msg = (pathEvaluated) => {
  const greetings = chalk.white.bold(pathEvaluated);
  const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "classic",
    borderColor: "magenta",
    backgroundColor: "#141518",
  };
  const msgBox = boxen(greetings, boxenOptions);
  console.log(msgBox);
};

//TODO chalk
const error = chalk.bold.red;
const warning = chalk.keyword("orange");
const whiteLetter = chalk.white.bold;
const blackLetter = chalk.black.bgYellow;
const pathChalk = chalk.white.bgBlue.bold;
const hrefhChalk = chalk.white.bgMagenta.bold;
const textChalk = chalk.cyanBright.bold;
const statusChalk = (obj) =>
  obj.status >= 400
    ? chalk.white.bgRed.bold(obj.status)
    : chalk.white.bgGreen.bold(obj.status);
const statusMsgChalk = (obj) =>
  obj.statusText === "Fail"
    ? chalk.white.bgRed.bold(obj.statusText)
    : chalk.white.bgGreen.bold(obj.statusText);

// //TODO extractLinksPrint
function extractLinksPrint(array) {
  let printLinks = "";
  // const array = extractLinks(route);
  array.forEach((obj) => {
    printLinks =
      `${pathChalk(obj.path)} ${hrefhChalk(obj.href)} ${textChalk(
        obj.text
      )}\n` + printLinks;
  });
  return printLinks;
}

// //TODO extractLinksPrint
const validatestLinksPrint = (array) => {
  let printLinks = "";
  // const array = extractLinks(route);
  array.forEach((obj) => {
    printLinks =
      `${pathChalk(obj.path)} ${hrefhChalk(obj.href)} ${statusChalk(
        obj
      )} ${statusMsgChalk(obj)} ${textChalk(obj.text)} \n` + printLinks;
  });
  return printLinks;
};

module.exports = {
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
};
