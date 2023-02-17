// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "userName",
        message: "What is the author's GitHub username?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of the project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What installation instructions are needed for the project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this project?",
    },
    {
        type: "list",
        name: "license",
        message: "Select the license for the project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "MIT",
            "Apache",
            "Boost",
        ],
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this project?",
    },
    {
        type: "input",
        name: "test",
        message: "What are the testing protocols for the project"
    },
    {
        type: "input",
        name: "author",
        message: "Who is the author of the project?"
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is the author's email?"
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log("There is an error: " + error);
        }
    });
};

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log("Create Professional README.md file");
        writeToFile("./dist/README.md",generateMarkdown({...response}));
    });
};

// Function call to initialize app
init();
