// Import modules chalk and boken
const chalk = require("chalk");
const boxen = require("boxen");

// Node.js program to demonstrate the fs.existsSync() method 

// const validationPath = (route) => fs.existsSync(route);

// TODO style msg to console
const greeting = (pathEvaluated) => {
    
    const greetings = chalk.green.bold(pathEvaluated);
    const boxenOptions = {  
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: "green",
        backgroundColor: "#555555"
       };
       const msgBox = boxen( greetings, boxenOptions );
       console.log(msgBox);

} 


module.exports = greeting;