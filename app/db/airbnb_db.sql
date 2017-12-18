### Schema for Airbnb database data

CREATE DATABASE airbnb_db;

set sql_mode='';

SHOW VARIABLES LIKE 'sql_mode';

USE airbnb_db;

select * from airbnbs;


Load data infile 'tomslee_airbnb_chicago_0010_2013-12-23.csv'
INTO TABLE airbnbs
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(room_id, @room_id, host_id, @host_id, room_type, @room_type, country, @county, city, @city, borough, @borough, neighborhood, @neighborhood, review, @review, overall_satisfaction, @overall_satisfaction, accomidates, @accomidates, bedrooms, @bedrooms, price, @price, minstay, @minstay, latitude, @latitude, longitude, @longitude, last_modified, @last_modified);

