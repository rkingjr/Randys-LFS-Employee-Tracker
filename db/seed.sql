USE LFSemployeesDB;

INSERT INTO units (unit_name)
VALUES
    ("Education"),
    ("Sales"),
    ("Service"),
    ("Marketing");

INSERT INTO positions (position_title, salary, unit_id)
VALUES
    ("International Teacher", 13000, 1),
    ("Local Teacher", 6500, 1),
    ("Senior Teacher", 14000, 1),
    ("Center Education Manager", 16000, 1),
    ("Course Consultant", 12000, 2),
    ("Center Sales Manager", 14000, 2),
    ("Progress Manager", 11000, 3),
    ("Center Operations Manager", 14000, 3),
    ("Marketing Consultant", 6000, 4);

INSERT INTO workers (first_name, last_name, position_id, manager_id)
VALUES
    ("Anil", "Sandhal", 1, 4),
    ("Jessica", "Li", 2, 4),
    ("Andy", "Freudenberg", 3, 4),
    ("Randy", "King", 4, NULL),
    ("Annie", "Wang", 5, 6),
    ("Betty", "Peng", 6, NULL),
    ("Lisa", "Liu", 7, 8),
    ("May", "Guan", 8, NULL),
    ("Hunter", "Wang", 9, NULL);
