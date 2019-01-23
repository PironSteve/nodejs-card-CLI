
const boxen = require('boxen');
const chalk = require('chalk');
const figlet = require('figlet');

const name = [chalk.white.bold("                Piron Steve")];
const workPlace = [chalk.white.italic("Junior Web Developer @ BeCode")];
const githubLink = [chalk.white("https://github.com/"), chalk.green.italic("PironSteve")];
const twitterLink = [chalk.white("https://twitter.com/"), chalk.cyan.italic("Beda_SP")];
const npmLink = [chalk.white("https://npmls.com/"), chalk.red.italic("~bedou")];
const linkedinLink = [chalk.white("https://linkedin.com/in/"), chalk.blue.italic("steve-piron")];
const npxCommand = [chalk.red("npx"), chalk.magenta.italic("pironsteve")];
const label = [chalk.white.bold("   Work:  "),chalk.white.bold(" Github:  "),chalk.white.bold("Twitter:  "),chalk.white.bold("    npm:  "),chalk.white.bold("LikedIn:  "),chalk.white.bold("   Card:  ")];
const ponctuation = ["\n" , " "];


console.log(chalk.yellow(figlet.textSync('                               Piron Steve V-Card', {
    horizontalLayout: 'default',
    verticalLayout: 'default'
})));
console.log(boxen(name[0] + ponctuation[0] + ponctuation[0] + label[0] + workPlace[0] + ponctuation[0] + ponctuation[0] + label[1] + githubLink[0] + githubLink[1] + ponctuation[0] + label[2] + twitterLink[0] + twitterLink[1] + ponctuation[0] + label[3] + npmLink[0] + npmLink[1] + ponctuation[0] + label[4] + linkedinLink[0] + linkedinLink[1] + ponctuation[0] + ponctuation[0] + label[5] + npxCommand[0] + ponctuation[1] + npxCommand[1] ,{padding:2, float:"center", borderStyle:"round"}));