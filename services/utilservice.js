app.service('UtilService', ['$http', function($http){
/*********************** STUDENT FUNCTIONS *************************************/
	this.registerStudent = function(student){
		return $http.post('utilservice.php?ac=1',student).
		then(function(response, status, headers, config){
//			console.log(response.data);
			return response.data;
		});
	};
	
	this.updateStudent = function(student){
		return $http.post('utilservice.php?ac=2',student).
		then(function(response, status, headers, config){
//			console.log(response.data);
			return response.data;
		});
	};
	
	this.fetchStudent = function(studentid){
		return $http.get('utilservice.php?ac=3&sid='+studentid).
		then(function(response, status, headers, config){
			console.log(response.data);
			return response.data;
		});
	};
}]);