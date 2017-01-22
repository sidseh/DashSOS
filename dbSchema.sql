USE iv28dtvanxwxdm51;

CREATE TABLE pwid 
(
		pwid INTEGER PRIMARY KEY AUTO_INCREMENT,
        uid	INTEGER
);

CREATE TABLE pw 
(
		pwid INTEGER PRIMARY KEY,
        pw VARCHAR (20)
);

CREATE TABLE allergies
(
		id INTEGER PRIMARY KEY AUTO_INCREMENT,
        uid	INTEGER,
        allergie VARCHAR (50)
);

CREATE TABLE diseases
(
		id INTEGER PRIMARY KEY AUTO_INCREMENT,
        uid	INTEGER,
        disease VARCHAR (50)
);

CREATE TABLE medications
(
		id INTEGER PRIMARY KEY AUTO_INCREMENT,
        uid	INTEGER,
        medication VARCHAR (50)
);

CREATE TABLE vitals
(
		id INTEGER PRIMARY KEY AUTO_INCREMENT,
        uid	INTEGER,
        height VARCHAR (50),
        weight VARCHAR (50),
        bldType VARCHAR (3),
        birthdate DATE
);

CREATE TABLE addresses
(
		id INTEGER PRIMARY KEY AUTO_INCREMENT,
        uid	INTEGER,
        address VARCHAR (50),
        city VARCHAR (50),
        state VARCHAR (2),
        zip INTEGER
);

CREATE TABLE contacts
(
		id INTEGER PRIMARY KEY AUTO_INCREMENT,
        uid	INTEGER,
        cid INTEGER,
        cname VARCHAR (60),
        cphone INTEGER
);

CREATE TABLE phones
(
		id INTEGER PRIMARY KEY AUTO_INCREMENT,
        uid	INTEGER,
        uphone INTEGER
);

CREATE TABLE users
(
		uid INTEGER PRIMARY KEY AUTO_INCREMENT,
        uname VARCHAR (20),
        fname VARCHAR (50),
        lname VARCHAR (50),
        joined_date TIMESTAMP
);
