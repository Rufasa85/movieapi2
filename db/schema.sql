DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    body TEXT NOT NULL,
    Foreign Key (movie_id) 
    REFERENCES movies(id)
    ON DELETE CASCADE
);

