const inquirer = require("inquirer");
const fs = require("fs");
// const questions = [
//   "projectTitle",
//   "description",
//   "installation",
//   "usage",
//   "liscense",
//   "contributing",
//   "tests",
// ];

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

## Description
    ${description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
    
## Installation 
    ${installation}

## Usage
    ${usage}

## License 
    ${liscense}

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
      choices: ["MIT", "GPLv3", "GPL"],
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

function init() {}

//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
//       err ? console.log(err) : console.log("Success!")
//     );
//   });
