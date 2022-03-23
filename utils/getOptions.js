const db = require('../config/connection')

const getUnits = async () => {
    let units = await db.promise().query(`SELECT * FROM units`);
    let unitsArray = units[0].map(({ unit_id, unit_name }) => ({
        name: `${unit_name}`,
        value: unit_id
    }));
    return unitsArray
}

const getPositions = async () => {
    let positions = await db.promise().query(`SELECT * FROM positions`);
    let positionsArray = positions[0].map(({ position_id, position_title }) => ({
        name: `${position_title}`,
        value: position_id
    }));
    return positionsArray
}

const getWorkers = async () => {
    let workers = await db.promise().query(`SELECT * FROM workers`);
    let workersArray = workers[0].map(({ worker_id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: worker_id
    }));
    return workersArray
}

const getManagers = async () => {
    let managers = await db.promise().query(`SELECT * FROM LFScenterDB.workers WHERE manager_id IS NULL;`);
    let managersArray = managers[0].map(({ worker_id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: worker_id
    }));
    return managersArray
}

module.exports = { getUnits, getPositions, getWorkers, getManagers };
