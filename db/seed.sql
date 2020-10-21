USE employees;

INSERT INTO department (name) 
VALUES 
("Satire"), 
("Parody"), 
("Travesty"), 
("Security"), 
("Management");

INSERT INTO role (title, salary, department_id) 
VALUES 
("Chaplin", 70000, 1), 
("Rector", 90000, 1), 
("Jester", 85000, 2),
("Harlequin", 110000, 2),
("Miscreant", 75000, 3),
("Scoundrel", 90000, 3),
("Security Guard", 55000, 4),
("Big Boss", 150000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Selena", "Meyer", 8, NULL),
("JB", "Smooth", 4, 1),
("Ashley", "Schaeffer", 6, 1),
("Eli", "Gemstone", 2, 1),
("Larry", "David", 3, 2),
("Marty", "Funkhouser", 3, 2),
("Kenny", "Powers", 5, 3),
("Reg", "Macworthy", 5, 3),
("Bunk", "Moreland", 7, 1),
("Jimmy", "McNulty", 7, 1),
("Kima", "Greggs", 7, 1),
("Jesse", "Gemstone", 1, 4),
("Kelvin", "Gemstone", 1, 4);
