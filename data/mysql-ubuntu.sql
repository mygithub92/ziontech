LOAD DATA LOCAL INFILE  '~/fabric/education/LFS171x/fabric-material/ziontech/data/role.csv'
INTO TABLE `role`
FIELDS OPTIONALLY ENCLOSED BY '"'
TERMINATED BY ',' 
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE  '~/fabric/education/LFS171x/fabric-material/ziontech/data/user.csv'
INTO TABLE `user`
FIELDS OPTIONALLY ENCLOSED BY '"'
TERMINATED BY ',' 
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE  '~/fabric/education/LFS171x/fabric-material/ziontech/data/user_role.csv'
INTO TABLE `user_role`
FIELDS OPTIONALLY ENCLOSED BY '"'
TERMINATED BY ',' 
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE  '~/fabric/education/LFS171x/fabric-material/ziontech/data/stage.csv'
INTO TABLE `stage`
FIELDS OPTIONALLY ENCLOSED BY '"'
TERMINATED BY ',' 
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE  '~/fabric/education/LFS171x/fabric-material/ziontech/data/product.csv'
INTO TABLE `product`
FIELDS OPTIONALLY ENCLOSED BY '"'
TERMINATED BY ',' 
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE  '~/fabric/education/LFS171x/fabric-material/ziontech/data/grape.csv'
INTO TABLE `grape`
FIELDS OPTIONALLY ENCLOSED BY '"'
TERMINATED BY ',' 
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;