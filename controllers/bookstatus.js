app.controller('BookStatusController',['$scope', function($scope){
	$scope.book = {
			accessionno:""
	};
	/**
	 * Check book status
	 */
	$scope.checkStatus = function(){
		console.log("Accession NO:"+this.book.accessionno);
	};
}]);