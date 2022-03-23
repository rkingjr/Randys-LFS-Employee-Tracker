USE LFSemployeesDB;

INSERT INTO departments (name)
VALUES ("Education");
INSERT INTO departments (name)
VALUES ("Sales");
INSERT INTO departments (name)
VALUES ("Service");
INSERT INTO departments (name)
VALUES ("Marketing");

INSERT INTO roles (title, salary, departments_id)
VALUES ("International Teacher", 13000, 1);
INSERT INTO roles (title, salary, departments_id)
VALUES ("Local Teacher", 6500, 1);
INSERT INTO roles (title, salary, departments_id)
VALUES ("Senior Teacher", 14000, 1);
INSERT INTO roles (title, salary, departments_id)
VALUES ("Center Education Manager", 16000, 1);
INSERT INTO roles (title, salary, departments_id)
VALUES ("Course Consultant", 12000, 2);
INSERT INTO roles (title, salary, departments_id)
VALUES ("Center Sales Manager", 14000, 2);
INSERT INTO roles (title, salary, departments_id)
VALUES ("Progress Manager", 11000, 3);
INSERT INTO roles (title, salary, departments_id)
VALUES ("Center Operations Manager", 14000, 3);
INSERT INTO roles (title, salary, departments_id)
VALUES ("Marketing Consultant", 6000, 4);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Anil", "Sandhal", 1, 4);
INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Jessica", "Li", 2, 4);
INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Andy", "Freudenberg", 3, 4);
INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Randy", "King", 4, NULL);
INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Annie", "Wang", 5, 6);
INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Betty", "Peng", 6, NULL);
INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Lisa", "Liu", 7, 8);
INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("May", "Guan", 8, NULL);
INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Hunter", "Wang", 9, NULL);
