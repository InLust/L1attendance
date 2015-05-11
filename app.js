var app = angular.module('attendanceApp', ['ngMaterial','ngRoute']).config(function($routeProvider, $locationProvider) {
	  $routeProvider
	   .when('/studententry', {
	    templateUrl: 'partials/studentform.html',
	    controller: 'StudentEntryController'
	  })
	  .when('/editstudent', {
	    templateUrl: 'partials/studentupdateform.html',
	    controller: 'StudentEntryController'
	  }).when('/', {
		controller: 'StudentEntryController',
		templateUrl: 'partials/studentform.html'
		});

	});;

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
	$scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 
  $scope.menuItems =[{title:"Register New Student",url: "#/studententry"},
  //{title: "Admin",url:"#/admin"},
  {title:"Edit Student", url:"#/editstudent"},
  {title:"Student Attendance Report", url:"#/enrollother"}];
  
  
  $scope.moduleTitle = "Attendance Module";
  $scope.collegeName="L1 Coaching";
}]);