DROP DATABASE IF EXISTS websoft;
CREATE DATABASE websoft;

USE websoft;

DROP TABLE IF EXISTS tech;
CREATE TABLE tech (
    id int NOT NULL AUTO_INCREMENT,
    label CHAR(10),
    type VARCHAR(50),
    PRIMARY KEY (id)
);

INSERT INTO tech (label, type) VALUES
    ('Apache', 'Web server'),
    ('PHP', 'Server side language'),
    ('MariaDB', 'Database server'),
    ('MySQL', 'Database server'),
    ('JavaScript','Server and client side language'),
    ('HTML','Webpage structure language'),
    ('CSS','Webpage styling language'),
    ('Node.js', 'Web server'),
    ('Java', 'Programming language')
;

SELECT * FROM tech;