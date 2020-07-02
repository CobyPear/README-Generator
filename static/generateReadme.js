const fs = require('fs');
const util = require('util');
const licenseTypes = require('../licenseTypes.json')
const asyncFileWrite = util.promisify(fs.writeFile);

module.exports = function (response) {

    response.license = licenseTypes[response.license];


    const installationLink = "## " + "<a name='install'>Installation Instructions</a>";
    const usageLink = "## " + "<a name='usage'>Usage Info</a>";
    const contributionLink = "## " + "<a name='contribution'>Contribution Guidelines</a>";
    const testLink = "## " + "<a name='test'>Test Instructions</a>";
    const questionsLink = "## " + "<a name='questions'>Questions/Contact</a>";
    const githubLink = `### [${response.username}'s GitHub Profile](https://github.com/${response.username})`

    const tableOfContents = "- [Installation Instructions](#install) \n\n - [Usage Info](#usage) \n\n - [Contribution Guidelines](#contribution) \n\n - [Test Instructions](#test) \n\n - [Questions](#questions)";

    return asyncFileWrite('README.md', `# ${response.title} \n\n ${response.license} \n\n ## Description \n\n ${response.description} \n\n ## Table Of Contents \n\n ${tableOfContents} \n\n ${installationLink} \n\n ${response.installation} \n\n ${usageLink} \n\n ${response.usage} \n\n ${contributionLink} \n\n  ${response.contribution} \n\n ${testLink} \n\n ${response.test} \n\n ${questionsLink} \n\n ${githubLink} \n\n ### if you have a question, I can be reached at ${response.email}`);
};