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
2) after they enter the title, it is written to the README.md file along with sections for Description, Table of Contents (includes links to each section of the document), Installation, Useage, License, Contributing, Tests, and Questions
3) after the file is made, the user is prompted to enter the description.
4) after the description is entered and appended to the README.md, the user is prompted to enter installation instructions
    a) so on and so forth for useage info,  contribution guidelines, and test instructions
5) useage info
6) contribution guidelines
7) test instructions
8) after those are appended, the user is prompted to enter license information 
    a) the license info adds a badge near the top of the readme which explains the app's license
9) user then enters GitHub username, and it is added to the readme under Questions with a link to thier GitHub profile
10) user adds email address and it is added to the Questions section with instructions on how to contact the user

*/