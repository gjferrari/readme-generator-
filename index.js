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
`;

inquirer.prompt([
  {
    type: "input",
    name: "projectTitle",
    message: "What is the name of your project?",
  },

  {
    type: "input",
    name: "description",
    message:
      "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: What was your motivation?  Why did you build this project? What problem does it solve?",
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
