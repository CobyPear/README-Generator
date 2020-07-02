/* README-Generator

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README


1) the user runs the application. they are prompted for the title.
2) after they enter the title, it is written to the README.md file along with sections for Description, Table of Contents (includes links to each section of the document), Installation, usage, License, Contributing, Tests, and Questions
3) after the file is made, the user is prompted to enter the description.
4) after the description is entered and appended to the README.md, the user is prompted to enter installation instructions
    a) so on and so forth for usage info,  contribution guidelines, and test instructions
5) usage info
6) contribution guidelines
7) test instructions
8) after those are appended, the user is prompted to enter license information 
    a) the license info adds a badge near the top of the readme which explains the app's license
9) user then enters GitHub username, and it is added to the readme under Questions with a link to thier GitHub profile
10) user adds email address and it is added to the Questions section with instructions on how to contact the user

*/

const questions = require('./questions');
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
// const { table } = require('console');


const asyncFileWrite = util.promisify(fs.writeFile);

// function to initialize program
function init() {

    inquirer
        .prompt(questions)
        .then(({ title, license, description, installation, usage, contribution, test, username, email }) => {
            let badge = '';

            switch (license) {
                case "Apache-2.0":
                    badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
                    break;
                case "BSD 2-Clause":
                    badge = "![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)";
                    break;
                case "BSD 3-Clause":
                    badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
                    break;
                case "EPL-2.0":
                    badge = "![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)";
                    break;
                case "GPL-2.0":
                    badge = "![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)";
                    break;
                case "GPL-3.0":
                    badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
                    break;
                case "MIT":
                    badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
                    break;
                case "MPL-2.0":
                    badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
                    break;
 
                };

                const installationLink = "## " + "<a name='install'>Installation Instructions</a>";
                const usageLink = "## " + "<a name='usage'>Usage Info</a>";
                const contributionLink = "## " + "<a name='contribution'>Contribution Guidelines</a>";
                const testLink = "## " + "<a name='test'>Test Instructions</a>";
                const questionsLink = "## " + "<a name='questions'>Questions/Contact</a>";
                const githubLink = `### [${username}'s GitHub Profile](https://github.com/${username})`

                const tableOfContents = "- [Installation Instructions](#install) \n\n - [Usage Info](#usage) \n\n - [Contribution Guidelines](#contribution) \n\n - [Test Instructions](#test) \n\n - [Questions](#questions)";

            return asyncFileWrite('README.md', `# ${title} \n\n ${badge} \n\n ## Description \n\n ${description} \n\n ## Table Of Contents \n\n ${tableOfContents} \n\n ${installationLink} \n\n ${installation} \n\n ${usageLink} \n\n ${usage} \n\n ${contributionLink} \n\n  ${contribution} \n\n ${testLink} \n\n ${test} \n\n ${questionsLink} \n\n ${githubLink} \n\n ### if you have a question, I can be reached at ${email}`);
        })
        .catch((err) => console.error);

};

// function call to initialize program
init();