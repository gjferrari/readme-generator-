const inquirer = require("inquirer");
const fs = require("fs");
const renderLicenseBadge = require("./generateLiscense");

const generateMD = ({
  projectTitle,
  description,
  installation,
  usage,
  liscense,
  contributing,
  tests,
  username,
  email,
}) =>
  `# ${projectTitle}
  
  ${renderLicenseBadge(liscense)}
## Description
    ${description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation 
    ${installation}

## Usage
    ${usage} 

## License 
    This application is covered by the ${liscense} liscense.

## Contributing 
    ${contributing}

## Tests 
    ${tests}

## Questions
To see more of my work, follow me at github.com/${username}.
For further questions about this project, contact me at ${email}.
`;

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the name of your project?",
    },

    {
      type: "input",
      name: "username",
      message: "What is your github username?",
    },

    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },

    {
      type: "input",
      name: "description",
      message:
        "Provide a short description explaining the what, why, and how of your project.",
    },

    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },

    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use.",
    },

    {
      type: "list",
      message: "What type of liscense would you like to use?",
      name: "liscense",
      choices: ["MIT", "Apache 2.0", "GPLv3"],
    },
    {
      type: "input",
      name: "contributing",
      message: "What are the guidelines for contribution?",
    },

    {
      type: "input",
      name: "tests",
      message: "Include any tests and example for your application.",
    },
  ])
  .then((answers) => {
    const readmeContent = generateMD(answers);

    fs.writeFile("README.md", readmeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created Readme!")
    );
  });

// function init() {
//   generateMD;
// }

// init();
