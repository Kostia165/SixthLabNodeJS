CREATE TABLE `messages` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`date`  date NOT NULL,
`path` varchar(50) NOT NULL,
`user_agent`  varchar(400) NOT NULL,
PRIMARY KEY(`id`)
);