-- Up
CREATE TABLE Person (
	id INTEGER PRIMARY KEY,
   	name data_type NOT NULL,
	email data_type DEFAULT 0
);

CREATE TABLE Vehicle (
	id INTEGER PRIMARY KEY,
   	brand TEXT,
	model TEXT,
	OwnerId INTEGER REFERENCES Person(id)
);

-- Down
DROP TABLE Person;
DROP TABLE Vehicle;


