<?php
include_once 'src/utility/dbutility.php';

function enrollMember($membername, $phoneno, $email, $fathername, $gender, $isactive, $dateofenrollment){
	$query = "INSERT INTO library_member_other_table(membername, phoneno, email, fathername, gender, isactive, dateofenrollment) 
	 VALUES('$membername', '$phoneno', '$email', '$fathername', '$gender', '$isactive', '$dateofenrollment')";
	$connection = initDB();
	$result = mysql_query($query);
	$memberid = mysql_insert_id();
	closeDB($connection);
	return $memberid;
}

function fetchMember($memberid){
	$query = "SELECT * FROM library_member_other_table ORDER BY membername";
	if($memberid != -1){
		$query = "SELECT * FROM library_member_other_table WHERE memberid='$memberid'";
	}
	$connection = initDB();
	$data = array();
	$entry = 0;
	$result = mysql_query($query);
	while($row = mysql_fetch_array($result)){
		$data[$entry]['id'] = $row['memberid'];
		$data[$entry]['membername'] = $row['membername'];
		$data[$entry]['phoneno'] = $row['phoneno'];
		$data[$entry]['email'] = $row['email'];
		$data[$entry]['gender'] = $row['gender'];
		$data[$entry]['fathername'] = $row['fathername'];
		$data[$entry]['dateofenrollment'] = $row['dateofenrollment'];
		$data[$entry]['isactive'] = $row['isactive'];
		$entry++;
	}
	closeDB($connection);
	return $data;
}
?>