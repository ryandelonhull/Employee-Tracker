USE employees;

INSERT INTO department (name) VALUES ("sales"), ("engineering"), ("finance"), ("legal"), ("management");

INSERT INTO role (title, salary, department_id) 
VALUES 
("sales person", 70000, 1), 
("sales lead", 90000, 1), 
("software engineer", 850000, 2),
("accountant", 55000, 3),
("account manager", 750000, 3),
("lawyer", 100000, 4),
("team lead", 150000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Larry", "David", 4, 2),
("JB", "Smooth", 5, 69),
("Kenny", "Powers", 1, 5),
("Reg", "Macworthy", 1, 5),
("Ashley", "Schaeffer", 2, 69),
("Bunk", "Moreland", 4, 69),
("Jimmy", "McNulty", 4, 69),
("Kima", "Greggs", 4, 69),

("Tony", "Soprano", 7, NULL);