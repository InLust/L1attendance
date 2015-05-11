<?php
include_once 'src/controllers/utilscontroller.php';
$message = "";
$action = $_GET['ac'];
if(isset($_POST['ac'])){
	$action = $_POST['ac'];
}

switch($action){
	case 1:
		//registers student
		$entityBody = file_get_contents('php://input');
		$student = json_decode($entityBody, true);
		registerStudent($student);
		$message = $student;
		break;
	case 2:
		//update student
		$entityBody = file_get_contents('php://input');
		$student = json_decode($entityBody, true);
		updateStudent($student);
		$message = $student;
		break;
	case 3:
		//fetch student
		$studentid = $_GET['sid'];
		$studentdata = fetchStudent($studentid);
		if(count($studentdata)){
			$message = $studentdata[0];
		}else{
			$message = array();
		}
		break;
}
echo json_encode($message);