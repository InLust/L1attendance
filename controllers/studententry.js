app.controller('StudentEntryController', ['$scope','$mdDialog','UtilService', function($scope, $mdDialog, UtilService){
	var dateToday = new Date();
	$scope.student = {
		sid: "",
		swipecardid:"",
		name:"",
		address:"",
		mobilenumber:"",
		guardianmobilenumber:"",
		totalfees:"",
		amountpaid:"",
		email:"",
		photo:"",
		pendingfeeduedate:"",
		swipecardstatus:1,
		registrationdate: dateToday,
		fathername: ""
	};
	
	$scope.swipestatus = [{label:"Active", value:1},{label:"Inactive", value:2}];
	$scope.radiodata= {group1:"1"};
	
	$scope.registerStudent = function(student){
		console.log(JSON.stringify(student));
		UtilService.registerStudent(student).then(function(data){
			console.log("Mesage from PHP Service");
			console.log(JSON.stringify(data));
		});
	};
	
	$scope.fetchStudent = function(studentid){
		console.log(JSON.stringify(studentid));
		UtilService.fetchStudent(studentid).then(function(data){
			console.log("In Fetch Student");
			console.log(JSON.stringify(data));
			$scope.student = data;
		});
	};
	
	$scope.updateStudent = function(student){
		console.log(JSON.stringify(student));
		UtilService.updateStudent(student).then(function(data){
			console.log("Mesage from PHP Service");
			console.log(JSON.stringify(data));
		});
	};
}]);
