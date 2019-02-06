-- CREATE TABLE PLAYERS(
-- 	player_id int NOT NULL,
-- 	player_name varchar(100) NOT NULL,
-- 	player_primary_pos varchar(20) NOT NULL,
-- 	player_secondary_pos varchar(20),
-- 	player_age int NOT NULL,
-- 	player_nationality varchar(50) NOT NULL,
-- 	PRIMARY KEY(player_id)
-- );

-- CREATE TABLE STAFF(
-- 	staff_id int NOT NULL,
-- 	staff_position varchar(50),
-- 	staff_name varchar(50),
-- 	PRIMARY KEY(staff_id)
-- );

CREATE TABLE MATCHDAY_SQUAD(
	starter_id int NOT NULL,
	p_id int,
	st_id int,
	PRIMARY KEY(starter_id),
	FOREIGN KEY (p_id) REFERENCES PLAYERS(player_id),
	FOREIGN KEY (st_id) REFERENCES STAFF(staff_id)
);