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
            message: "Provide the Github username of those, if any, that helped on this project."
        },
        {
            name: "test",
            message: "Provide test instructions so the user can test the application"
        },
        {
            tyoe: "list",
            name: "license",
            message: "Choose a License to use", 
            // need to add a section of the readme which explains which license the app is covered under
            choices: []
        },
        {
            name: "github",
            message: "What is your Github user name?"
            // add link to github username page under questions tab
        },
        {
            name: "email",
            message: "What is your Email address?"
        }

    ])

console.log(userInput);
}
userResponse();