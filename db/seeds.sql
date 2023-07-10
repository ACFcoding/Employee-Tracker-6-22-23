INSERT INTO department (department_name)
VALUES ("HR"),
       ("Marketing"),
       ("Development"),
       ("Processing"),
       ("R&D");

INSERT INTO employee_role (job_title, salary, department_id)
VALUES ("HR Coordinator", 85000, 1),
       ("Marketing Director", 103000, 2),
       ("IT Specialist", 74000, 3),
       ("Product Manager", 92000, 4),
       ("Senior Engineer", 145000, 5);

INSERT INTO employee_info (employee_fname, employee_lname, role_id)
VALUES ("Jason", "Cline", 1),
       ("Mia", "Eckerson", 2),
       ("Natasa", "Roman", 3),
       ("Brad", "Lee", 4);

INSERT INTO employee_info (employee_fname, employee_lname, role_id, manager_id)
VALUES ("Jason", "Cline", 1, 2),
       ("Mia", "Eckerson", 2, 4);
       

