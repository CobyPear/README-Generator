// // function to generate markdown for README
// function generateMarkdown(data) {
//     return `# ${data.title}`;
//   }

const inquirer = require('inquirer');
  
  // array of questions for user
const questions = [
  {
      type: "input",
      name: "title",
      message: "What is the name of your project?"
  },
  {
      type: "input",
      name: "description",
      message: "How would you describe your application?",
      default: "This is the best application!"
  },
  {
      type: "input",
      name: "installation",
      message: "How is your application installed?",
      default: "npm i"
  },
  {
      type: "input",
      name: "usage",
      message: "How is your application to be used?",
      default: "npm run start"
  },
  {
      type: "input",
      name: "contribution",
      message: "What are the Contribution Guidelines?"
  },
  {
      type: "input",
      name: "test",
      message: "What is the command used to test your application?",
      default: "npm run test"
  },
  {
      type: "list",
      name: "license",
      message: "Choose a license: ",
      default: "MIT",
      choices: [

          "Apache-2.0",
          "BSD 2-Clause",
          "BSD 3-Clause",
          "EPL-2.0",
          "GPL-2.0",
          "GPL-3.0",
          "MIT",
          "MPL-2.0",
          new inquirer.Separator()
      ]
  },
  {
      type: "input",
      name: "username",
      message: "What is your GitHub username?"
  },
  {
      type: "input",
      name: "email",
      message: "What is your email address?"
  }
];

  module.exports = questions;