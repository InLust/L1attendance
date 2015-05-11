app.controller('IssuePeriodController',['$scope','UtilService', function($scope, UtilService){
	var issuePeriod = {
			id:"",
			label:"",
			noofdays:0,
			remarks:""
	};
	$scope.issueperiod = issuePeriod;
	$scope.issuePeriods = [];
	UtilService.fetchPeriodTypes().then(function(data){
		$scope.issuePeriods = data;
	});
	$scope.isEdit = false;
	$scope.addIssuePeriod = function(){
		console.log('Iss'+JSON.stringify(this.issueperiod));
		$scope.issueperiod = this.issueperiod;
		UtilService.addPeriodType(this.issueperiod).then(function(data){
			$scope.issuePeriods = data;
		});
		this.issueperiod={
				id: 1+$scope.issuePeriods.length,
				label:"",
				noofdays:0,
				remarks:""};
	};
	
	$scope.removeIssuePeriod = function(issuePeriod){
		var index = $scope.issuePeriods.indexOf(issuePeriod);
		if(index != -1){
			UtilService.deletePeriodType(this.issuePeriod.id).then(function(data){
				$scope.issuePeriods = data;
			});
			$scope.issuePeriods.splice(index, 1);
		}
	};
	
	$scope.editIssuePeriod = function(issuePeriod){
		$scope.issueperiod = issuePeriod;
		$scope.isEdit = true;
	};
	
	$scope.updateIssuePeriod = function(issueperiod){
		console.log(this.issueperiod);
		UtilService.updatePeriodType(this.issueperiod).then(function(data){
			$scope.issuePeriods = data;
		});
		$scope.issueperiod = {
				id:1+$scope.issuePeriods.length,
				label:"",
				noofdays:0,
				remarks:""
		};
		$scope.isEdit = false;
	};
	
	$scope.cancelIssuePeriodEdit = function(){
		$scope.issueperiod = {
				id:1+$scope.issuePeriods.length,
				label:"",
				noofdays:0,
				remarks:""
		};
		$scope.isEdit = false;
	};
}]);