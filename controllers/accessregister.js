app.controller('AccessionRegisterController',['$scope','UtilService', function($scope,UtilService){
	var accessRegister = {
			id:"",
			label:"",
			startseries:0,
			remarks:""
	};
	$scope.accessRegister = accessRegister;
	$scope.accessRegisters = [];
	UtilService.fetchRegisters().then(function(data){
		$scope.accessRegisters = data;
	});
	$scope.isEdit = false;
	$scope.addAccessRegister = function(){
		console.log('Iss'+JSON.stringify(this.accessRegister));
		$scope.accessRegister = this.accessRegister;
		UtilService.addRegister(this.accessRegister).then(function(data){
			$scope.accessRegisters = data;
		});
		this.accessRegister={
				id: 1+$scope.accessRegisters.length,
				label:"",
				startseries:0,
				remarks:""};
	};
	
	$scope.removeAccessRegister = function(accessRegister){
		var index = $scope.accessRegisters.indexOf(this.accessRegister);
		if(index != -1){
			UtilService.deleteRegister(this.accessRegister.id).then(function(data){
				$scope.accessRegisters = data;
			});
		}
	};
	
	$scope.editAccessRegister = function(accessRegister){
		$scope.accessRegister = this.accessRegister;
		$scope.isEdit = true;
	};
	
	$scope.updateAccessRegister = function(accessRegister){
		console.log(this.accessRegister);
		UtilService.updateRegister(this.accessRegister).then(function(data){
			$scope.accessRegisters = data;
		});
		resetAccessRegister();
		$scope.isEdit = false;
	};
	
	$scope.cancelAccessRegister = function(){
		resetAccessRegister();
		$scope.isEdit = false;
	};
	
	function resetAccessRegister(){
		$scope.accessRegister = {
				id:1+$scope.accessRegisters.length,
				label:"",
				startseries:0,
				remarks:""
		};
	}
}]);