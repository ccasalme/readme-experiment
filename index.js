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
        
      },
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
      },
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
      },
      type: 'input',
      name: 'usage',
      message: 'Usage information: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your usage information!');
          return false;
        }
      },
      type: 'input',
      name: 'contribution',
      message: 'Contribution guidelines: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your contribution guidelines!');
          return false;
        }
      },
      type: 'input',
      name: 'test',
      message: 'Test instructions: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your test instructions!');
          return false;
        }
      },
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
      },
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
      },
      type: 'input',
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
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });