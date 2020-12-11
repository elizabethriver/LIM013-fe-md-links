// Import modules chalk and boken
const chalk = require("chalk");
const boxen = require("boxen");

// TODO style msg to console
const greeting = (pathEvaluated) => {
    const greetings = chalk.green.magenta(pathEvaluated);
    const boxenOptions = {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "magenta",
      backgroundColor: "#f7ec00",
    };
    const msgBox = boxen(greetings, boxenOptions);
    console.log(msgBox);
  };
  
// const error = chalk.bold.red;
// const warning = chalk.keyword('orange');
 
// console.log(error('Error!'));
// console.log(warning('Warning!'));

// const log = console.log;
 
// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
 
// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));
 
// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
 
// // Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
 
// // Nest styles of the same type even (color, underline, background)
// log(chalk.green(
//     'I am a green line ' +
//     chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));
 
// // ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);
 

// // Use RGB colors in terminal emulators that support it.
// log(chalk.keyword('orange')('Yay for orange colored text!'));
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));

module.exports = greeting;

// const validateLinks = (route) => {
//   const arrValidate = [];
//   const arrLinksMD = extractLinks(route);
//   // Petición HTTP
//   arrLinksMD.forEach((element) => {
//     arrValidate.push(axios.get(element.href)
//       .then((response) => {
//         const newObj = {
//           ...element,
//           status: response.status,
//           statusText: response.statusText,
//         };
//         return newObj;
//       })
//       .catch(() => ({
//         ...element,
//         status: 400,
//         statusText: 'FAIL',
//       })));
//   });
//   return Promise.all(arrValidate);
// };