var app = angular.module('dinerApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/basque',{
		templateUrl:"./client/app.html",
		controller: 'AppCtrl'
	})
	.when('/menu',{
		templateUrl:"./client/menu.html",
		controller:'MenuCtrl'
	})
	.otherwise({
		redirectTo: '/basque'
	});
});


app.factory('diner', function($q,$http){

	var Plate = function(name, description, price, ingredients){
		this.name = name;
		this.description =description;
		this.price = price;
		this.ingredients = ingredients; 

	};
	Plate.prototype.toString= function(){
		var returnString='' ;

		returnString += "name" + this.name + "\n" +
		"description: " + this.description + "\n" +
		"price: " + this.price + "\n";

		return returnString;
	};
	
	function createNewPlate(name, description, price){
	  return new Plate('Steak Sandwich', 'Something nice and tasty', 11.75);
	}

	return {
	  create : createNewPlate 
	};
})

app.controller('MenuCtrl',function($scope,diner){

	var steakSandwich= diner.create('Steak Sandwich', 'Something nice and tasty', 11.75);
	var lambShoulderSteak = diner.create('Lamb Shoulder Steak','Something Different', 11.75);
	var lambChops = diner.create('Lamb Chops', 'why not', 14.75);
	var chickenSandwich = diner.create('chicken Breast Sandwich', 'basque chicken on a bun',9.75);
	var basqueBurger = diner.create('Basco Burger', 'a better burger', 9.75);
	var plates = [];
	$scope.plates = [];
	// $scope.plates.push(steakSandwich);
	// $scope.plates.push(lambShoulderSteak);
	// $scope.plates.push(lambChops);
	// $scope.plates.push(chickenSandwich);
	// $scope.plates.push(basqueBurger);

	plates.push(steakSandwich);
	plates.push(lambShoulderSteak);
	plates.push(lambChops);
	plates.push(chickenSandwich);
	plates.push(basqueBurger);
	console.log(plates);
	
});


// diner.plates().then(function(result){
// 			$scope.plates = result;
// 		})