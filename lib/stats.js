const chalk = require("chalk");

const totalChalk = chalk.blue.bold;
const uniqueChalk = chalk.green.bold;
const totalChalkBg = chalk.white.bgBlue.bold;
const uniqueChalkBg = chalk.white.bgGreen.bold;
const brokenChalk = chalk.red.bold;
const brokenChalkBg = chalk.white.bgRed.bold;

//TODO stats de Links
const statsLinks = (array) => {
  let arrayHref = array.map((obj) => obj.href);
  let newSet = [...new Set(arrayHref)];
  let unique = newSet.length;
  if (unique === 0) {
    return new Error("Not unique links");
  }
  return unique;
};
//TODO broken Links
const brokenLinks = (array) => {
  let arrayHrefBroken = array.filter((obj) => obj.status >= 400);
  let newSet = [...new Set(arrayHrefBroken)];
  let unique = newSet.length;
  return unique;
};
//TODO Total Links
const totalLinks = (array) => {
  let totalArray = array.length;
  if (totalArray === 0) {
    return new Error("Not Links");
  }
  return totalArray;
};

//TODO info de stats Links
const infoStats = (array) => {
  const totalArray = totalLinks(array);
  const unique = statsLinks(array);
  const total = `
  ${totalChalkBg("Total:")} ${totalChalk(totalArray)}
  ${uniqueChalkBg("Unique:")} ${uniqueChalk(unique)}`;
  // console.log(total);
  return total;
};

//TODO info de stats validate Links
const inftoValidateStats = (array) => {
  const totalArray = totalLinks(array);
  const unique = statsLinks(array);
  const broken = brokenLinks(array);
  const total = `
  ${totalChalkBg("Total:")} ${totalChalk(totalArray)}
  ${uniqueChalkBg("Unique:")} ${uniqueChalk(unique)}
  ${brokenChalkBg("Broken:")} ${brokenChalk(broken)}`;
  return total;
};

module.exports = {
  infoStats,
  inftoValidateStats,
  totalChalkBg,
  uniqueChalkBg,
  brokenChalkBg,
};
