import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    // Editor instead of input for longer answers
    // When prompted with the Editor option, press the Enter button, and a text editor will open up.
    // If you are on Mac, you will be prompted to choose an editor.
    // If you are on Windows, you will be prompted to choose an editor or download a new editor.
        {
      type: 'input',
      name: 'title',
      message: 'Project title: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
        
      }},
      {
      type: 'editor',
      name: 'description',
      message: 'Project description: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }
      }},
      {
      type: 'editor',
      name: 'installation',
      message: 'Installation instructions: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your installation instructions!');
          return false;
        }
      }},
      {
      type: 'editor',
      name: 'usage',
      message: 'Usage information: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your usage information!');
          return false;
        }
      }},
      {
      type: 'editor',
      name: 'contributing',
      message: 'Contribution guidelines: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your contribution guidelines!');
          return false;
        }
      }},
      {
      type: 'editor',
      name: 'tests',
      message: 'Test instructions: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your test instructions!');
          return false;
        }
      }},
      {
      type: 'list',
      name: 'license',
      message: 'License: (Required)',
      choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None'],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please select a license!');
          return false;
        }
      }},
      {
      type: 'editor',
      name: 'username (Required)',
      message: 'GitHub username: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }},
      {
        //If there are different, contributors, add them here
      type: 'editor',
      name: 'questions',
      message: 'Questions: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your questions!');
          return false;
        }
      }
  }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    const response = generateMarkdown(answers);
    console.log(response);
    fs.writeFile('README.md', response, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
