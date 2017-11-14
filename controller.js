app.controller("blogCtlr", function ($scope, $http) {
  $http.get("http://www.infoziant.com/json/json.php")
   .success(function(response){
	   alert(json.stringify(response));
   })
});