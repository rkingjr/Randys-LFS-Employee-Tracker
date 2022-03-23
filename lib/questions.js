const { getUnits, getPositions, getWorkers, getManagers } = require('../utils/getOptions.js')

const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all units', 'View all positions', 'View all workers', 'Add a unit', 'Add a position', 'Add a worker', 'Update a worker position', 'View workers by unit', 'View workers by manager', 'Update worker manager', 'Delete a unit', 'Delete a position', 'Delete a worker', 'Display budget for each unit', 'Fin'],
        name: 'userChoice',
    },
    {
        type: 'input',
        message: 'What is the name of the position?',
        name: 'positionName',
        when: (answers => answers.userChoice == 'Add a position'),
    },
    {
        type: 'input',
        message: 'What is the salary of the position?',
        name: 'salary',
        when: (answers => answers.userChoice == 'Add a position'),
    },
    {
        type: 'list',
        message: 'Which unit does the position belong to?',
        choices: async function units() {return getUnits()},
        name: 'positionUnit',
        when: (answers => answers.userChoice == 'Add a position'),
    },
    {
        type: 'input',
        message: 'What is the name of the unit?',
        name: 'unitName',
        when: (answers => answers.userChoice == 'Add a unit'),
    },
    {
        type: 'input',
        message: "What is the worker's FIRST name?",
        name: 'firstName',
        when: (answers => answers.userChoice == 'Add a worker'),
    },
    {
        type: 'input',
        message: "What is the worker's LAST name?",
        name: 'lastName',
        when: (answers => answers.userChoice == 'Add a worker'),
    },
    {
        type: 'list',
        message: "What is the worker's position?",
        name: 'workerPosition',
        choices: async function positions() {return getPositions()},
        when: (answers => answers.userChoice == 'Add a worker'),
    },
    {
        type: 'list',
        message: "Who is the worker's manager?",
        name: 'workerManager',
        choices: async function positions() {return getManagers()},
        when: (answers => answers.userChoice == 'Add a worker'),
    },
    {
        type: 'list',
        message: "Who's position would you like to update?",
        name: 'workerSelection',
        choices: async function workers() {return getWorkers()},
        when: (answers => answers.userChoice == 'Update a workers position'),
    },
    {
        type: 'list',
        message: "Which position do you want to assign the selected worker?",
        name: 'workerSelectionPosition',
        choices: async function positions() {return getPositions()},
        when: (answers => answers.userChoice == 'Update a worker position'),
    },
    {
        type: 'list',
        message: 'View worker by which unit? ',
        choices: async function units() {return getUnits()},
        name: 'positionUnit',
        when: (answers => answers.userChoice == 'View workers By unit'),
    },
    {
        type: 'list',
        message: "View workers by which manager?",
        name: 'workerManager',
        choices: async function managers() {return getManagers()},
        when: (answers => answers.userChoice == 'View workers By manager')
    },
    {
        type: 'list',
        message: "Which worker would you like to update?",
        name: 'workerSelection',
        choices: async function workers() {return getWorkers()},
        when: (answers => answers.userChoice == 'Update worker managers')
    },
    {
        type: 'list',
        message: "Who is that worker's new manager?",
        name: 'workerManager',
        choices: async function managers() {return getManagers()},
        when: (answers => answers.userChoice == 'Update worker managers')
    },
    {
        type: 'list',
        message: "Which unit would you like to delete?",
        name: 'positionUnit',
        choices: async function workers() {return getUnits()},
        when: (answers => answers.userChoice == 'Delete a unit'),
    },
    {
        type: 'list',
        message: "Which position would you like to delete?",
        name: 'workerPosition',
        choices: async function workers() {return getPositions()},
        when: (answers => answers.userChoice == 'Delete a position'),
    },
    {
        type: 'list',
        message: "Which worker would you like to delete?",
        name: 'workerSelection',
        choices: async function workers() {return getWorkers()},
        when: (answers => answers.userChoice == 'Delete a worker'),
    },
]

module.exports = questions
