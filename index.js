const fs = require("fs");
const inquirer = require("inquirer");
const api = require("./api");
const createMarkdown = require("./createMarkdown");


function userInput() {
    return inquirer.prompt ([
        {
            type: "input",
            message: "Enter your name.",
            name: "name"
        },
        {
            type: "input",
            message: "Enter your GitHub username.",
            name: "ghname"
        },
        {
            type: "input",
            message: "Enter the project name.",
            name: "projectname"
        },
        {
            type: "input",
            message: "Enter the link to the project.",
            name: "link"
        },
        {
            type: "input",
            message: "Description of the project.",
            name: "description"
        },
        {
            type: "input",
            message: "What packages or dependencies are needed to run the project?",
            name: "dependencies"
        },
        {
            type: "input",
            message: "What is the purpose of the project?",
            name: "purpose"
        },
        {
            type: "checkbox",
            message: "What kind of license will be used?",
            name: "license",
            choices: [
                "MIT", 
                "APACHE", 
                "GPL", 
                "BSD",
                "NO LICENSE"]
        },
        {
            type: "input",
            message: "Who contributed to the project?",
            name: "contributors"
        },
        {
            type: "input",
            message: "How can a user run a test?",
            name: "test"
        }
    ]);
};

function writetoFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) {
            throw err;
        }
        console.log("README file completed successfully.");
    });
};

async function init() {
    try {
        const answers = await userInput();
        createMarkdown(answers);
        writetoFile("README.md", createMarkdown(answers));

        
    } catch (err) {
        console.log(err);
    }
};

init();