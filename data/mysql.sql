LOAD DATA LOCAL INFILE  'C:\\Users\\diw389\\work\\ziontech\\data\\role.csv'
INTO TABLE `role`
FIELDS OPTIONALLY ENCLOSED BY '"'
TERMINATED BY ',' 
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE  'C:\\Users\\diw389\\work\\ziontech\\data\\user.csv'
INTO TABLE `user`
FIELDS OPTIONALLY ENCLOSED BY '"'
TERMINATED BY ',' 
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE  'C:\\Users\\diw389\\work\\ziontech\\data\\user_role.csv'
INTO TABLE `user_role`
FIELDS OPTIONALLY ENCLOSED BY '"'
TERMINATED BY ',' 
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE  'C:\\Users\\diw389\\work\\ziontech\\data\\stage.csv'
INTO TABLE `stage`
FIELDS OPTIONALLY ENCLOSED BY '"'
TERMINATED BY ',' 
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE  'C:\\Users\\diw389\\work\\ziontech\\data\\product.csv'
INTO TABLE `product`
FIELDS OPTIONALLY ENCLOSED BY '"'
TERMINATED BY ',' 
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE  'C:\\Users\\diw389\\work\\ziontech\\data\\grape.csv'
INTO TABLE `grape`
FIELDS OPTIONALLY ENCLOSED BY '"'
TERMINATED BY ',' 
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS
(id,name,region,vineyard,variety,block,row_range,vintage,estimated_weight,transfer_date,transferred,bins,status,user_id,product_id,@var_creation_date,updated_date)
set creation_date = STR_TO_DATE(@var_creation_date,"%Y-%m-%d")