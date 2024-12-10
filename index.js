import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
        {
            // This is your project title
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
        //Provide a short description explaining the what, why, and how of your project.
        // What was your motivation? Why did you build this project? What problem does it solve?
        // Why did you build this project? What problem does it solve?
        // What did you learn from this
      type: 'input',
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
        // What are the steps required to install your project? 
        // Provide a step-by-step description of how to get the development environment running.
      type: 'input',
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
        // Provide instructions and examples for use. Include screenshots as needed.
        // To add a screenshot, create an assets/images folder in your repository 
        // and upload your screenshot to it.
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your usage information!');
          return false;
        }
      }},
      {
        // List your collaborators, if any, with links to their GitHub profiles.
        // If you used any third-party assets that require attribution, 
        // list the creators with links to their primary web presence in this section.
        // If you followed tutorials, include links to those here as well.
      type: 'input',
      name: 'credits',
      message: 'List your collaborators: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter all the contributors!');
          return false;
        }
      }},
      {
        // If you wrote any tests for your application, 
        // provide examples on how to run them here
      type: 'input',
      name: 'tests',
      message: 'Test instructions: (optional)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your test instructions!');
          return false;
        }
      }},
      {
        // Choose a license for your project from a list of options
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
        // If you created an application or package 
        // and would like other developers to contribute it, enter your GitHub username
      type: 'input',
      name: 'username',
      message: 'GitHub username: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }},
    //   {
        // Necessary for the .prompt to work
        // See https://www.npmjs.com/package/inquirer#installation
    //   type: 'input',
    //   name: 'questions',
    //   message: 'Questions: (Required)',
    //   validate: nameInput => {
    //     if (nameInput) {
    //       return true;
    //     } else {
    //       console.log('Please enter your questions!');
    //       return false;
    //     }
    //   }
//   }
])
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
