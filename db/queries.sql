-- View all units
SELECT *
FROM units;

-- View all positions
SELECT position_id AS id, position_title, unit_name, salary
FROM units
JOIN positions ON positions.unit_id = units.unit_id;

-- View all workers
SELECT w.worker_id AS id, w.first_name, w.last_name, position_title, unit_name, w.manager_id, man.first_name AS manager_first_name, man.last_name AS manager_last_name
FROM workers w
LEFT JOIN positions ON w.position_id = positions.position_id
LEFT JOIN units ON positions.unit_id= units.unit_id
LEFT JOIN workers man
ON man.worker_id = w.manager_id;

-- Add a unit
INSERT INTO units (unit_name)
    VALUES
        (?);

-- Add A position
INSERT INTO positions (position_title, salary, unit_name)
    VALUES
        (?,?);

-- Add A worker
INSERT INTO workers (first_name, last_name, position_title, manager_id)
    VALUES
        (?,?,?,?);

-- Update a worker position
UPDATE workers
SET position_id = ?
WHERE worker_id = ?

-- View workers by unit
SELECT worker_id, first_name, last_name, units.unit_name
FROM LFScenterDB.workers
JOIN LFScenterDB.positions ON workers.position_id = positions.position_id
JOIN LFScenterDB.units ON positions.unit_id = units.unit_id
WHERE units.unit_id = ?;

-- View workers By manager
SELECT w.worker_id AS id, w.first_name, w.last_name, w.manager_id, man.first_name AS manager_first_name, man.last_name AS manager_last_name
FROM workers w
LEFT JOIN workers man
ON man.worker_id = w.manager_id
WHERE w.manager_id = ?;

-- Update worker manager
UPDATE workers SET manager_id = ? WHERE worker_id = ?

-- Delete position
DELETE FROM positions WHERE position_id = ?;

-- Delete unit
DELETE FROM units WHERE unit_id = ?;

-- Delete worker
DELETE FROM workers WHERE worker_id = ?;


-- Display budget
SELECT unit_name, SUM(salary) AS Budget
FROM workers
JOIN positions ON workers.position_id = positions.position_id
LEFT JOIN units ON positions.unit_id= units.unit_id
GROUP BY units.unit_name;
