const inquirer = require("inquirer");
const fs = require("fs");

async function userResponse() {
    const userInput = await inquirer.prompt([
        {
            name: "title",
            message: "What is the name of the project title?"
        },
        {
            name: "description",
            message: "How would you descript the project?"
        },
        {
            name: "install",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the application environment running."
        },
        {
            name: "usage",
            message: "What are the instructions for usage of this application?"
        },
        {
            name: "contribution",
            message: "Provide the Github username of those that helped on this project. (Don't forget to add your own username as well)"
        },
        {
            name: "test",
            message: "Provide test instructions so the user can test the application"
        },
        {
            type: "list",
            name: "license",
            message: "Choose a License to use", 
            choices: ['MIT License [![MIT License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)',
             'GPL License [![GPL License](https://img.shields.io/badge/license-GPL-blue)](https://marketplace.eclipse.org/)',
             'Apache 2 License [![Apache 2 License](https://img.shields.io/badge/license-Apache%202-blue)](https://www.apache.org/licenses/LICENSE-2.0)',
             'PyPI License [![PyPI License](https://img.shields.io/badge/license-BSD-green)](https://pypi.org/project/license/)']
        },
        {
            name: "github",
            message: "What is your Github user name?"
        },
        {
            name: "email",
            message: "What is your Email address?"
        }

    ])

    const readME = (`
# ${userInput.title}
## Description
${userInput.description}
\n* [Installation](#Installation)
\n* [Usage](#Usage)
\n* [License](#License)
\n* [Contributors](#Contributors)
\n* [Tests](#Tests)
\n* [Questions](#Questions)

## Installation
${userInput.install}

## Usage
${userInput.usage}

## License 
This project is licensed under the ${userInput.license}

## Contributors
${userInput.contribution}

## Tests
${userInput.test}

## Questions
**Please ask any questions to the following**
\nEmail: ${userInput.email}
\nGitHub: https://github.com/${userInput.github}`
);
    console.log(readME);

    fs.writeFile("README.md", readME, function(err){
        if (err) {
            console.log("There was an error, please rerun the application to create your README.md file.");
        }
        console.log("Successfully generated README.md")
    });

}
userResponse();