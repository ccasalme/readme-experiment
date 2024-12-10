   # README.md Generator
  
  ## Description
**What:** This project is to generate a Readme Fileâ€•prompting the User of what is needed for a Professional ReadMe.

**Why:** This will allow Users to quickly create a professional README for their new projects without having to remember everything they need to include.

**How:** This application is invoked by using the following command: node index.js.

**How was this project built:** I modified a starter code to create a command-line application that dynamically generates a professional README.md file from a User's input by using the inquirer package.

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  
  ## Installation

### Node.js Installation
To get started, ensure that Node.js is installed on your computer. Open your command line and type node -v. If Node.js is installed, this will display the version number. If not, visit **Node.js Official Website and download the LTS version.**

**For Windows:** Look for the section labeled Download for Windows (x64).
**For macOS:** Look for the section labeled Download for macOS (x64).

### Cloning the Repository
**Once Node.js is set up, follow these steps to clone this repository:**
1. Click the green Code button on the repository page and copy the provided link.
2. Open your preferred code editor and launch the terminal.
3. Use the cd command in the terminal to navigate to the directory where you want to clone the repository.
4. Finally, run the following command: git clone <repo-link>. Note to replace the <repo-link> with the link you copied earlier.

### Installing Inquirer
This project requires the **Inquirer npm package**. Since inquirer isn't included with **Node.js** by default, follow these steps:
1. Run npm init in your terminal to initialize npm in your project directory
2. Navigate to the app.js file, then run the following command to install the Inquirer: npm install inquirer
3. For additional information or documentation about inquirer and other npm packages, visit: https://www.npmjs.com/ and use the search bar to find the package you need.
  
  ## Usage
### Usage Instructions:

When you first clone the repository, your directory should match the folder structure and files shown in the example below.

### Generating the README:
1. Use the cd command to navigate to the directory where the README-generator is located.
2. On the terminal, type: node index This will start the program and prompt you with a series of questions. Don't worry if you are not too sure what to input! Check my comments to guide you for  what you need for each section.
3. For each question:
- Enter your response and press Enter when you're ready to move on (if you are in a Text Editor, you will use the commands for the Text Editor that you are using).
- Important: Saving your response will move you to the next prompt. Once a response is saved, you cannot edit it through the terminal. However, you can make changes later directly in the generated README.md file using your code editor (you can also do so on you GitHub repo - although it is best practice to do it in your code editor. Don't be like me)
4. After completing all questions, you'll see a message in the terminal: The file has been saved!
5. Open the explorer tab in your code editor to find the newly generated README.md file. Make edits if needed.

![Screenshot 2024-12-10 at 6 03 13 PM](https://github.com/user-attachments/assets/b83e05f3-ea5c-422c-97ad-482aba8da083)

![Screenshot 2024-12-10 at 6 04 43 PM](https://github.com/user-attachments/assets/34ad13b7-ec67-46b5-b874-eab7d12329be)

![Screenshot 2024-12-10 at 6 04 18 PM](https://github.com/user-attachments/assets/b776324f-678f-4e5a-bf15-40408afd3590)

![Screenshot 2024-12-10 at 6 03 59 PM](https://github.com/user-attachments/assets/e9322663-45f6-4a7a-b0fb-9fef3cfcc93a)

### Committing and Pushing the README:
**Once you're satisfied with the README file:**
1. Add and commit the changes using the following commands: git add -A and then git commit -m "Add README file"
2. Push the file to the repository with: git push origin main

Then c'est viola! Your README is now live in the repository!

**Visual Walkthrough:**
For a step by step demo of creating the README, watch the walkthrough video here: (upcoming)

  ## Contributing
### My references:

**NPM Package:** https://www.npmjs.com/

**Professional README Guide:** https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

**Video Submission Guide:** https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide

Inquirer.js: https://www.npmjs.com/package/inquirer#installation

**What is node.js YouTube tutorial:** https://www.youtube.com/watch?v=TlB_eWDSMt4 _(if you are new to node.js and would like a quick lesson of what it is)
_

  ## Tests
### To Test it out:
1. Simply type node index.js on your command line (or terminal)
2. You can input anything as your answers for the prompts. I even used Doge Coin Tester or simply just Test many times
3. If you are going to add another prompt, make sure you reference the generateMarkdown.js as well, or else whatever you added is just gunna float somewhere in the void (because how would the computer know that you want that in your Mardkdown too, right?)

### Note:
If you would like to modify the code and to add more prompts, simply add it in! 

_P.S. don't forget to close a bracket and a comma like I did ahhaha._

  ## License
  MIT
      
