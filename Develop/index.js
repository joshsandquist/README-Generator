// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
      },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description for your project.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('Your README file has been generated!')
    );
  }
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
      const markdown = generateMarkdown(data);
      writeToFile('README.md', markdown);
    });
  }

// Function call to initialize app
init();
