app.controller('IssueReturnController', ['$scope','$filter','UtilService', function($scope, $filter, UtilService){
	var dateToday = new Date();
	$scope.transaction = {
			type: "Issue",
			memberType: "Student",
			issue:{
				issuedate:dateToday,
				issueperiod:{},
				duedate:"",
				returndate:"",
				fine: 0,
				remarks:"",
				issuetime:"",
				logicalduedate:"",
				returntime:"",
				finedeposited:""
			}
	};
	$scope.book = {};
	$scope.user = {};
	$scope.issuePeriods = [];
	UtilService.fetchPeriodTypes().then(function(data){
		$scope.issuePeriods = data;
	});
	$scope.transaction.issue.issueperiod =$scope.issuePeriods[0]; 
}]);