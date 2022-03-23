const questions = require('./lib/questions');
const inquirer = require("inquirer");
const table = require('console.table');
const db = require('./config/connection');

const showUnits = () => {
    const sqlQuery = `SELECT * FROM units;`;
    db.query(sqlQuery, (err, response) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.table(response);
            askQuestions();
        }
    })
};

const showPositions = () => {
    const sqlQuery = `SELECT position_id AS id, position_title, unit_name, salary
        FROM units
        JOIN positions ON positions.unit_id = units.unit_id;`;
    db.query(sqlQuery, (err, response) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.table(response);
            askQuestions();
        }
    })
};

const showWorkers = () => {
    const sqlQuery = `SELECT w.worker_id AS id, w.first_name, w.last_name, position_title, unit_name, w.manager_id, man.first_name AS manager_first_name, man.last_name AS manager_last_name
        FROM workers w
        LEFT JOIN positions ON w.position_id = positions.position_id
        LEFT JOIN units ON positions.unit_id= units.unit_id
        LEFT JOIN workers man
        ON man.worker_id = w.manager_id;`;
    db.query(sqlQuery, (err, response) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.table(response);
            askQuestions();
        }
    })
};

const addUnit = (unitName) => {
    const sqlQuery = `INSERT INTO units (unit_name) VALUES (?);`
    db.query(sqlQuery, [unitName], (err, response) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(`Added ${unitName} to the database.`);
            askQuestions();
        }
    })
};

const addPosition = (positionTitle, salary, unitName) => {
    const sqlQuery = `INSERT INTO positions (position_title, salary, unit_id) VALUES (?,?,?);`;
    db.query(sqlQuery, [positionTitle, salary, unitName], (err, response) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(`Added ${positionTitle} to the database.`);
            askQuestions();
        }
    })
};

const addWorker = (firstName, lastName, positionName, workerManager) => {
    const sqlQuery = `INSERT INTO workers (first_name, last_name, position_id, manager_id) VALUES (?,?,?,?);`;
    db.query(sqlQuery, [firstName, lastName, positionName, workerManager], (err, response) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(`Added worker ${firstName} ${lastName} to the database.`);
            askQuestions();
        }
    })
};

const updateWorker = (positionId, workerId) => {
    const sqlQuery = `UPDATE workers SET position_id = ? WHERE worker_id = ?`;
    db.query(sqlQuery, [positionId, workerId], (err, response) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The workers's position has been changed.");
            askQuestions();
        }
    })
};

const showWorkersByUnit = (unitId) => {
    const sqlQuery = `SELECT worker_id, first_name, last_name, units.unit_name
        FROM LFScenterDB.workers
        JOIN LFScenterDB.positions ON workers.position_id = positions.position_id
        JOIN LFScenterDB.units ON positions.unit_id = units.unit_id
        WHERE units.unit_id = ?;`;
    db.query(sqlQuery, [unitId], (err, response) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.table(response);
            askQuestions();
        }
    })
}

const showWorkersByManager = (managerId) => {
    const sqlQuery = `SELECT w.worker_id AS id, w.first_name, w.last_name, w.manager_id, man.first_name AS manager_first_name, man.last_name AS manager_last_name
        FROM workers w
        LEFT JOIN workers man
        ON man.worker_id = w.manager_id
        WHERE w.manager_id = ?;`;
    db.query(sqlQuery, [managerId], (err, response) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.table(response);
            askQuestions();
        }
    })
}

const updateWorkerManager = (workerId, managerId) => {
    const sqlQuery = `UPDATE workers SET manager_id = ? WHERE worker_id = ?`;
    db.query(sqlQuery, [workerId, managerId], (err, response) => {
        err ? console.log(err) : console.log(`Worker's manager has been updated.`);
        askQuestions();
    })
}

const deleteUnit = (unitId) => {
    const sqlQuery = `DELETE FROM units WHERE unit_id = ?;`;
    db.query(sqlQuery, [unitId], (err, res) => {
        err ? console.log(err) : console.log(`Unit has been deleted.`);
        askQuestions();
    })
}

const deletePosition = (positionId) => {
    const sqlQuery = `DELETE FROM positions WHERE position_id = ?;`;
    db.query(sqlQuery, [positionId], (err, res) => {
        err ? console.log(err) : console.log(`Position has been deleted.`);
        askQuestions();
    })
}

const deleteWorker = (workerId) => {
    const sqlQuery = `DELETE FROM workers WHERE worker_id = ?;`;
    db.query(sqlQuery, [workerId], (err, res) => {
        err ? console.log(err) : console.log(`Worker has been deleted.`);
        askQuestions();
    })
}

const showBudget = () => {
    const sqlQuery = `SELECT unit_name, SUM(salary) AS Budget
    FROM workers
    JOIN positions ON workers.position_id = positions.position_id
    LEFT JOIN units ON positions.unit_id= units.unit_id
    GROUP BY units.unit_name;`;
    db.query(sqlQuery, (err, response) => {
        err ? console.log(err) : console.table(response)
        askQuestions();
    })
}

const askQuestions = () => {
    inquirer.prompt(questions)
        .then((answers) => {
            const { userChoice, unitName, positionName, salary, positionUnit, firstName, lastName, workerPosition, workerManager, workerSelection, workerSelectionPosition } = answers;
            console.log(`\nYou selected ${userChoice}\n`);
            switch (userChoice) {
                case 'Show all units.':
                    showUnits();
                    break;
                case 'Show all positions.':
                    showPositions();
                    break;
                case 'Show ll workers.':
                    showWorkers();
                    break;
                case 'Add a unit.':
                    addUnit(unitName);
                    break;
                case 'Add A position.':
                    addPosition(positionName, salary, positionUnit);
                    break;
                case 'Add a worker.':
                    addWorker(firstName, lastName, workerPosition, workerManager);
                    break;
                case 'Update a worker position.':
                    updateWorker(workerSelectionPosition, workerSelection);
                    break;
                case 'Show workers by unit.':
                    showWorkersByUnit(positionUnit);
                    break;
                case 'Show workers by manager.':
                    showWorkersByManager(workerManager);
                    break;
                case 'Update worker managers.':
                    updateWorkerManager(workerSelection, workerManager)
                    break;
                case 'Delete a unit.':
                    deleteUnit(positionUnit);
                    break;
                case 'Delete a position.':
                    deletePosition(workerPosition);
                    break;
                case 'Delete a worker.':
                    deleteWorker(workerSelection);
                    break;
                case 'Display budget for each unit.':
                    showBudget();
                    break;
                case 'Fin':
                    console.log('再见 Goodbye!');
                    db.end();
                    break;
            }
        })
}

askQuestions();
