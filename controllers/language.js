app.controller('LanguageController',['$scope','UtilService', function($scope, UtilService){
	var language = {
			id:"",
			label:"",
			remarks:""
	};
	$scope.language = language;
	$scope.languages =[];
	UtilService.fetchLanguages().then(function(data){
		$scope.languages = data;
	});
	$scope.isEdit = false;
	$scope.addLanguage = function(language){
		$scope.language= this.language;
		UtilService.addLanguage(this.language).then(function(data){
			$scope.languages = data;
		});
		this.language={
				id: 1+$scope.languages.length,
				label:"",
				remarks:""};
	};
	
	$scope.removeLanguage = function(language){
		var index = $scope.languages.indexOf(language);
		if(index != -1){
			$scope.languages.splice(index, 1);
			UtilService.deleteLanguage(language.id).then(function(data){
				$scope.languages = data;
			});
		}
	};
	
	$scope.editLanguage = function(language){
		$scope.language = language;
		$scope.isEdit = true;
	};
	
	$scope.updateLanguage = function(language){
		UtilService.updateLanguage(this.language).then(function(data){
			$scope.languages = data;
		});
		resetLanguage();
		$scope.isEdit = false;
	};
	
	$scope.cancelLanguage = function(){
		resetLanguage();
		$scope.isEdit = false;
	};
	
	function resetLanguage(){
		$scope.language = {
				id: 1+$scope.languages.length,
				label:"",
				remarks:""
		};
	}
}]);