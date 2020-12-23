ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

CREATE DATABASE company;

USE company;

CREATE TABLE employees (
id INT(11) NOT NULL  AUTO_INCREMENT,
name VARCHAR(45) DEFAULT NULL,
salary INT(11) DEFAULT NULL,
PRIMARY KEY(id)
);

DESCRIBE employees;

INSERT INTO employees values
	(1,'Ryan Ray',10000),
    (2,'Jhon Doe',40000),
    (3,'Ray Raynolds',100000);

SELECT * FROM employees;

CALL employeeAddOrEdit(0,'Test',100);