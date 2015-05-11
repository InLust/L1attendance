CREATE TABLE `student_master_table` (
  `studentid` int(11) NOT NULL,
  `swipecardid` varchar(45) DEFAULT NULL,
  `address` text,
  `mobilenumber` varchar(45) DEFAULT NULL,
  `guardianmobilenumber` varchar(45) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `emailid` varchar(100) DEFAULT NULL,
  `photourl` text,
  `totalfees` double(10,2) DEFAULT NULL,
  `fathername` varchar(45) DEFAULT NULL,
  `swipecardstatus` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`studentid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1


