app.controller('PlaceController',['$scope','$http', 'UtilService', function($scope, $http, UtilService){
	var place = {
			id:"",
			label:"",
			remarks:""
	};
	$scope.place = place;
	$scope.placeList = function(){
		UtilService.fetchPlaces().then(function(data){
			$scope.places = data;
		});
	};
	$scope.places =$scope.placeList();
	
	$scope.isEdit = false;
	
	$scope.addPlace = function(place){
		$scope.place= this.place;
		console.log(JSON.stringify(this.place));
		UtilService.addPlace(this.place).then(function(data){
			$scope.places = data;
		});
	//	$scope.places.push($scope.place);
		this.place={
				id: 1+$scope.places.length,
				label:"",
				remarks:""};
	};
	
	$scope.removePlace = function(place){
		var index = $scope.places.indexOf(place);
		if(index != -1){
			$scope.places.splice(index, 1);
			UtilService.deletePlace(place.id).then(function(data){
				$scope.places = data;
			});
			
		}
	};
	
	$scope.editPlace = function(place){
		$scope.place = place;
		$scope.isEdit = true;
	};
	
	$scope.updatePlace = function(place){
		$scope.isEdit = false;
		$scope.place = this.place;
		UtilService.updatePlace(this.place).then(function(data){
			$scope.places = data;
		});
		resetPlace();
	};
	
	$scope.cancelPlace = function(){
		resetPlace();
		$scope.isEdit = false;
	};
	
	function resetPlace(){
		$scope.place = {
				id: 1+$scope.places.length,
				label:"",
				remarks:""
		};
	}
}]);