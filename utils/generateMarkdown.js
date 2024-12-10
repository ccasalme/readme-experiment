function init() {
    prompt(questions).then(answers => {
      const response = `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## License
  ${answers.license}
      `; // Template literal end
      writeToFile('README.md', response);
    }); // Close the .then() method
  } // Close the init function

  // Function call to initialize program
init();