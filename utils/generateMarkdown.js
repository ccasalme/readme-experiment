function generateMarkdown(answersParam) {
return ` 
  # ${answersParam.title}
  
  ## Description
  ${answersParam.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Tests](#tests)
  - [License](#license)
  
  ## Installation
  ${answersParam.installation}
  
  ## Usage
  ${answersParam.usage}
  
  ## Contributing
  ${answersParam.contributing}
  
  ## Tests
  ${answersParam.tests}
  
  ## License
  ${answersParam.license}
      `
}
export default generateMarkdown;