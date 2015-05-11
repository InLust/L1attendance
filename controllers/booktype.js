app.controller('BookTypeController',['$scope', 'UtilService', function($scope, UtilService){
	var booktype = {
			id:"",
			label:"",
			remarks:""
	};
	$scope.booktype = booktype;
	$scope.booktypeList = function(){
		UtilService.fetchBookTypes().then(function(data){
			$scope.booktypes = data;
		});
	};
	$scope.booktypes =$scope.booktypeList();
	
	$scope.isEdit = false;
	
	$scope.addBookType = function(booktype){
		$scope.booktype= this.booktype;
		console.log(JSON.stringify(this.booktype));
		UtilService.addBookType(this.booktype).then(function(data){
			$scope.booktypes = data;
		});
	//	$scope.booktypes.push($scope.booktype);
		this.booktype={
				id: 1+$scope.booktypes.length,
				label:"",
				remarks:""};
	};
	
	$scope.removeBookType = function(booktype){
		var index = $scope.booktypes.indexOf(booktype);
		if(index != -1){
			$scope.booktypes.splice(index, 1);
			UtilService.deleteBookType(booktype.id).then(function(data){
				$scope.booktypes = data;
			});
			
		}
	};
	
	$scope.editBookType = function(booktype){
		$scope.booktype = booktype;
		$scope.isEdit = true;
	};
	
	$scope.updateBookType = function(booktype){
		$scope.isEdit = false;
		$scope.booktype = this.booktype;
		UtilService.updateBookType(this.booktype).then(function(data){
			$scope.booktypes = data;
		});
		resetBookType();
	};
	
	$scope.cancelBookType = function(){
		resetBookType();
		$scope.isEdit = false;
	};
	
	function resetBookType(){
		$scope.booktype = {
				id: 1+$scope.booktypes.length,
				label:"",
				remarks:""
		};
	}
}]);