<?php 
	include_once 'src/utility/dbutility.php';
	
	/************************* STUDENT OPERATIONS************************/
	function fetchStudent($studentid =-1){
		$query = "SELECT * FROM student_master_table WHERE studentid='$studentid'";
		$connection = initDB();
		$result = mysql_query($query);
		$data = array();
		$entry = 0;
		while($row = mysql_fetch_array($result)){
			$data[$entry]['sid'] = $row['studentid'];
			$data[$entry]['name'] = $row['name'];
			$data[$entry]['fathername'] = $row['fathername'];
			$data[$entry]['swipecardid'] = $row['swipecardid'];
			$data[$entry]['mobilenumber'] = $row['mobilenumber'];
			$data[$entry]['guardianmobilenumber'] = $row['guardianmobilenumber'];
			$data[$entry]['address'] = $row['address'];
			$data[$entry]['totalfees'] = $row['totalfees'];
			$data[$entry]['email'] = $row['emailid'];
			$data[$entry]['photourl'] = $row['photourl'];
			$data[$entry]['swipecardstatus'] = $row['swipecardstatus'];
			$data[$entry]['registrationdate'] = $row['registrationdate'];
			$entry++;
		}
		closeDB($connection);
		return $data;
	}
	
	function registerStudent($student){
		$studentid = $student['sid'];
		$swipecardid = $student['swipecardid'];
		$name = $student['name'];
		$fathername = $student['fathername'];
		$mobilenumber = $student['mobilenumber'];
		$guardianmobilenumber = $student['guardianmobilenumber'];
		$totalfees = $student['totalfees'];
		$emailid = $student['email'];
		$photourl = $student['photo'];
		$swipecardstatus = $student['swipecardstatus'];
		$address = $student['address'];
		$registrationdate = substr($student['registrationdate'],0, 10);
		$query = "INSERT INTO student_master_table(studentid, name, swipecardid, 
			fathername, mobilenumber, guardianmobilenumber, address, totalfees, 
			emailid, photourl, swipecardstatus, registrationdate)
			VALUES('$studentid', '$name', '$swipecardid', '$fathername', 
			'$mobilenumber', '$guardianmobilenumber', '$address', '$totalfees',
			'$emailid', '$photourl', '$swipecardstatus', '$registrationdate')";
		$connection = initDB();
		$result = mysql_query($query) ;//or die(mysql_error());
		closeDB($connection);
		return $studentid;
	}
	
	function updateStudent($student){
		$studentid = $student['sid'];
		$swipecardid = $student['swipecardid'];
		$name = $student['name'];
		$fathername = $student['fathername'];
		$mobilenumber = $student['mobilenumber'];
		$guardianmobilenumber = $student['guardianmobilenumber'];
		$totalfees = $student['totalfees'];
		$emailid = $student['email'];
		$photourl = $student['photo'];
		$swipecardstatus = $student['swipecardstatus'];
		$address = $student['address'];
		$registrationdate = substr($student['registrationdate'],0, 10);
		$query = "UPDATE student_master_table SET name='$name', swipecardid='$swipecardid', 
		fathername='$fathername', mobilenumber='$mobilenumber', guardianmobilenumber='$guardianmobilenumber', 
		address='$address', totalfees='$totalfees', emailid='$emailid', photourl='$photourl', 
		swipecardstatus='$swipecardstatus', registrationdate='$registrationdate' WHERE studentid='$studentid'";
		$connection = initDB();
		$result = mysql_query($query);
		closeDB($connection);
		return $studentid;
	}
?>