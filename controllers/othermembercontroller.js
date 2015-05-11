app.service('OtherService',['$http', function($http){
	this.enrollMember = function(member){
		console.log('IN OTHER SERVICE');
		return $http.post('otherservice.php?ac=1', member).
		then(function(response,status, headers, config){
			return response.data;
		});
	};
	
	this.listMembers = function(){
		return $http.get('otherservice.php?ac=2&mid=-1').
		then(function(response,status, headers, config){
			return response.data;
		});
	};
	
	this.updateMember = function(member){
		
	};
	
	this.toggleStatus = function(member){
		
	};
	
	this.fetchMember = function(memberid){
		return $http.get('otherservice.php?ac=2&mid='+memberid).
		then(function(response,status, headers, config){
			return response.data;
		});

	};
}]);

app.controller('OtherMemberController', ['$scope', 'OtherService', function($scope, OtherService){
	$scope.member = {
		id:"",
		membername:"",
		phoneno:"",
		email:"",
		fathername:"",
		gender:"",
		isactive:1,
	};
	
	$scope.message ="";
	$scope.genders = [{label:'Male'}, {label: "Female"}];
	$scope.member.gender = $scope.genders[0].label;
	$scope.members = [];
	$scope.enrollMember = function(member){
		console.log(this.member);
		OtherService.enrollMember(this.member).then(function(data){
			$scope.message = "Enrollment Successfull! Enrollment Id: "+data.id;
		});
	};
	$scope.showMemberList = function(){
		OtherService.listMembers().then(function(data){
			$scope.members = data;
		});
	};
	$scope.searchresults = [];
	$scope.searchMember = function(member){
		OtherService.fetchMember(this.member.id).then(function(data){
			$scope.searchresults = data;
			if($scope.searchresults.length<1){
				$scope.message = "Invalid Enrollment Id";
			}else{
				$scope.message = "";
			}
		});
	};
}]);