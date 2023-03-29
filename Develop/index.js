// The required packages for this application are inquirer, fs, and the generateMarkdown.JS file.
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// This array contains multiple objects formatted in inquirer syntax to be posed to the user
// The responses to the questions are saved for use in the generateMarkdown function
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?"},
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description for your project:'},
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',},
      {
        type: 'input',
        name: 'usage',
        message: "Please provide the project's usage information:",},
      {
        type: 'input',
        name: 'contributing',
        message: 'Please provide information oh how to contribute:',},
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide testing instructions:',},
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'None'],},
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',},
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    }];

// This function will generate a new file in our folder using the fs.writeFile method, in our case a README file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('Your README.md file has been generated!')
    );
  }
// This function initializes the application. 
// First, the inquirer.prompt method will display questions to the user.
// Once the questions are answered, the data is added to the generateMarkdown function for proper markdown syntax, and saved into the answers variable.
// Finally, a new README.md file is written with our answers variable as the template.
function init() {
    inquirer.prompt(questions)
    .then((data) => {
      const answers = generateMarkdown(data);
      writeToFile('README.md', answers);
    });
  }

// This function will run when 'node index' is passed into the terminal.
init();
