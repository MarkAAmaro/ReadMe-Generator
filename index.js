const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where do you live?',

        },
        {
            type: 'input',
            name: 'Bio',
            message: 'What is your info?',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: "What is your linkedin URL",
        },
        {
            type: 'input',
            name: 'github',
            message: 'whats your Hub'

        },
    ])