DROP DATABASE IF EXISTS LFSemployeesDB;

CREATE DATABASE LFSemployeesDB;

USE LFSemployeesDB;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT_NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL(10.3) NULL,
    departments_id INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    roles_id INT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);
