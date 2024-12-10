

// Import the required packages
const inquirer = require('inquirer');
const path = require('path');
//const generateMarkdown = require('./utils/generateMarkdown');

// Questions array for the user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe the installation process:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage of this project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can users test the project?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Under what license is your project distributed?',
  }
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Create a README file");
        writeToFile('README.md', generateMarkdown({ ...responses }));
    });

}
init();

// function init() {
//     prompt(questions).then(answers => {
//       const response = `
//   # ${answers.title}
  
//   ## Description
//   ${answers.description}
  
//   ## Table of Contents
//   - [Installation](#installation)
//   - [Usage](#usage)
//   - [Contributing](#contributing)
//   - [Tests](#tests)
//   - [License](#license)
  
//   ## Installation
//   ${answers.installation}
  
//   ## Usage
//   ${answers.usage}
  
//   ## Contributing
//   ${answers.contributing}
  
//   ## Tests
//   ${answers.tests}
  
//   ## License
//   ${answers.license}
//       `; // Template literal end
//       writeToFile('README.md', response);
//     }); // Close the .then() method
//   } // Close the init function

//   // Function call to initialize program
// init();
