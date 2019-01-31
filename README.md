# DB_Project1
This project will be a DB based on an English Premier League Football team, Chelsea FC using an API to integrate the data for the team.

A Team will have one coach(one to one)
A team will have one stadium that the team plays out of (one to many)
A team will have many players that play different positions (many to many)
A team will have many players with many nationalities (many to many)
One player will have many Attributes( One to Many) Height, Weight, Age, etc.

A sample qeuery to return all players that are Brazilian:
SELECT * 

FROM PLAYERS.NATIONALITIES

WHERE NATIONALALITIES = BRAZIL;
