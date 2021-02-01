USE employees;

INSERT INTO department (name)
VALUES
("FOH"),
("BOH"),
("Delivery"),
("Legal"),
("Marketing");
INSERT INTO role (title, salary, department_id)
VALUES
('Server', 24000, 1),
('Busser', 16000, 1),
('Host', 14000, 1),
('Prep', 17000, 2),
('Line Cook', 18000, 2),
('Sous Chef', 20000, 2),
('Head Chef', 45000, 2),
('Driver', 18000, 3),
('Lawyer', 80000, 4),
('Esquire', 60000, 4),
('Promoter', 30000, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Alejandro", "Castro", 1, NULL),
("Mikayla", "Smith", 2, NULL),
("Alicia", "Welch", 3, NULL ),
("Kathy", "Johnson", 4, NULL),
("Dianna", "Lark", 5, NULL),
("Florian", "Ocean", 6, NULL),
("Zeb", "Szen", 7, NULL),
("Marty", "Jenner", 8, NULL),
("Mark", "Lofter", 9, NULL),
("Bill", "Burns", 10, NULL),
("Sandra", "Crood", 11, NULL);