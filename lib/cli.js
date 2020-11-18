#!/usr/bin/env node

// const fs = require('fs');

const init = () => {
    'hola mundo que tal, dia feliz';
}
init();

// console.log(process.argv);

const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.white.bold(init);

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);

module.exports = init;