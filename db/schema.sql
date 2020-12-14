
DROP DATABASE IF EXISTS hxoto4nf88y1ubdt;

CREATE DATABASE hxoto4nf88y1ubdt;
USE hxoto4nf88y1ubdt; 


CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT, 
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id) 
);