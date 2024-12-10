

// // Import the required packages
// const inquirer = require('inquirer');
// inquirer.prompt([
//     {
//       type: 'input',
//       name: 'test',
//       message: 'What is your test input?',
//     }
//   ]).then(answers => {
//     console.log('Input received:', answers.test);
//   }).catch(error => {
//     console.error('Error occurred:', error);
//   });
// const path = require('path');
// const generateMarkdown = require('./utils/generateMarkdown');

// // Questions array for the user input
// const questions = [
//   {
//     type: 'input',
//     name: 'title',
//     message: 'What is the title of your project?',
//   },
//   {
//     type: 'input',
//     name: 'description',
//     message: 'Provide a short description of your project:',
//   },
//   {
//     type: 'input',
//     name: 'installation',
//     message: 'Describe the installation process:',
//   },
//   {
//     type: 'input',
//     name: 'usage',
//     message: 'What is the usage of this project?',
//   },
//   {
//     type: 'input',
//     name: 'contributing',
//     message: 'How can others contribute?',
//   },
//   {
//     type: 'input',
//     name: 'tests',
//     message: 'How can users test the project?',
//   },
//   {
//     type: 'input',
//     name: 'license',
//     message: 'Under what license is your project distributed?',
//   }
// ];

// // Function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }

// // Function to initialize program
// function init() {
//     inquirer.prompt(questions).then((responses) => {
//         console.log("Create a README file");
//         writeToFile('README.md', generateMarkdown({ ...responses }));
//     });

// }
// init();

// // function init() {
// //     prompt(questions).then(answers => {
// //       const response = `
// //   # ${answers.title}
  
// //   ## Description
// //   ${answers.description}
  
// //   ## Table of Contents
// //   - [Installation](#installation)
// //   - [Usage](#usage)
// //   - [Contributing](#contributing)
// //   - [Tests](#tests)
// //   - [License](#license)
  
// //   ## Installation
// //   ${answers.installation}
  
// //   ## Usage
// //   ${answers.usage}
  
// //   ## Contributing
// //   ${answers.contributing}
  
// //   ## Tests
// //   ${answers.tests}
  
// //   ## License
// //   ${answers.license}
// //       `; // Template literal end
// //       writeToFile('README.md', response);
// //     }); // Close the .then() method
// //   } // Close the init function

// //   // Function call to initialize program
// // init();


import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
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
      }
  }])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });