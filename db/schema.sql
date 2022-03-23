DROP DATABASE IF EXISTS LFScenterDB;
CREATE DATABASE LFScenterDB;

USE LFScenterDB;

CREATE TABLE units (
    unit_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    unit_name VARCHAR(100) NOT NULL
);

CREATE TABLE positions (
    position_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    position_title VARCHAR(100) NOT NULL,
    salary INT NOT NULL,
    unit_id INT,
    FOREIGN KEY (unit_id)
    REFERENCES units(unit_id)
    ON DELETE SET NULL
);

CREATE TABLE workers (
    worker_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    position_id INT,
    manager_id INT UNSIGNED,
    INDEX man_ind (manager_id),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES workers(worker_id) ON DELETE SET NULL,
    FOREIGN KEY (position_id) REFERENCES positions(position_id) ON DELETE SET NULL
);
