const inquirer = require("inquirer");
const fs = require("fs");

const generateMD = () =>
  `#${projectTitle}

    ## Description
    ${description}

    ## Table of Contents 
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    
    ## Installation 

    ## Usage

    ## License 

    ## Contributing 

    ## Tests 

    ## Questions
    To see more of my work, follow me at github.com/${username}.
    For further questions about this project, contact me at ${email}.
`;

inquirer.prompt([
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
      "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: What was your motivation?  Why did you build this project? What problem does it solve?",
  },

  {
    type: "list",
    message: "What type of liscense would you like to use?",
    name: "liscense",
    choices: ["MIT", "GPLv3", "GPL"],
  },

  //   {
  //     type: "checkbox",
  //     message: "What languages do you know?",
  //     name: "stack",
  //     choices: ["HTML", "CSS", "JavaScript", "MySQL"],
  //   },
  //   {
  //     type: "list",
  //     message: "What is your preferred method of communication?",
  //     name: "contact",
  //     choices: ["email", "phone", "telekinesis"],
  //   },
]);
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
//       err ? console.log(err) : console.log("Success!")
//     );
//   });
