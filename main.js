
// var app = angular.module('dinerApp', ['ngRoute']);

// app.config(function($routeProvider){
// 	$routeProvider.when('/basque',{
// 		templateUrl:"./client/app.html",
// 		controller: 'AppCtrl'
// 	})
// 	.when('/menu',{
// 		templateUrl:"./client/menu.html",
// 		controller:'MenuCtrl'
// 	})
// 	.otherwise({
// 		redirectTo: '/basque'
// 	});
// });


// var FoodItem = function(name, vegetarian,fish, meat, calories){
// 		this.name = name;
// 		this.vegetarian = vegetarian;
// 		this.fish = fish;
// 		this.meat = meat;
// 		this.calories = calories;
// 	};

// 	var veggieMix = new FoodItem('steamed veggies', true, false, false, 400);
// 	var angusBeef = new FoodItem('angus Beef Patty', false, false, true, 600);
// 	var cheese = new FoodItem('swiss', true,false,false, 400);
// 	var cabbage = new FoodItem('cabbage mix',true, false, false, 200);
// 	var chicken = new FoodItem('chicken breast', false, false, true, 400);
// 	var halibut = new FoodItem('halibut', false, true, false, 300);
// 	var rockyMountainOysters = new FoodItem('Rocky Mountain Oysters', false, false, true, 600 );
// 	FoodItem.prototype.toString = function(){
// 		return "name " + this.name + "\n" + "calories: " + this.calories + "\n"
// 		+ "vegetarian "+ this.vegetarian + "\n" + "fish: " + this.fish + "meat: " + this.meat + "\n" + "calories: " + this.calories;
// 	};

// 	var Drink = function(name, description, price, ingredients){
// 		this.name = name;
// 		this.description =description;
// 		this.price = price;
// 		this.ingredients = ingredients; 
// 	};


// 	var Plate = function(name, description, price, ingredients){
// 		this.name = name;
// 		this.description =description;
// 		this.price = price;
// 		this.ingredients = ingredients; 

// 	};
// 	Plate.prototype.toString= function(){
// 		var returnString='' ;

// 		returnString += "name" + this.name + "\n" +
// 		"description: " + this.description + "\n" +
// 		"price: " + this.price + "\n";

// 		return returnString;
// 	};
// 	 var steakSandwich= new Plate('Steak Sandwich', 'Something nice and tasty', 11.75);
// 	 var lambShoulderSteak = new Plate('Lamb Shoulder Steak','Something Different', 11.75);
// 	 var lambChops = new Plate('Lamb Chops', 'why not', 14.75);
// 	 var chickenSandwich = new Plate('chicken Breast Sandwich', 'basque chicken on a bun',9.75);
// 	 var basqueBurger = new Plate('Basco Burger', 'a better burger', 9.75);

// 	 //  will need to adjust constructors for dinner and lunch; 

// 	 var topSirlion = new Plate('Top Sirlion Steak','juicy steak cooked to order', 24.50);
// 	 var basqueChicken = new Plate('Basque Chicken','Sauteed chicken', 24.50);


	


// app.factory('diner', function($q,$http){

// 	return {
// 		// title: "StarCraft"
// 		// plates: [new Plate('basque chicken','hot meal',10)]
// 		plates: function(){
// 			return $q(function(resolve,reject){
// 				$http.get('plates.json').
// 				  success(function(data, status, headers, config) {
// 				    resolve(data);
// 				  }).
// 				  error(function(data, status, headers, config) {
// 				    reject(data);
// 				  });
// 			})
// 		}

// 	}
// })
app.controller('AppCtrl',function($scope){
	$scope.model = {
		message: "this is my app"
	}
	// $scope.plates= [new Plate('basque chicken','hot meal',10)];
});

// app.controller('MenuCtrl',function($scope,game){
// 	// $scope.model = {
// 	// 	message:"this is my 2nd message"
// 	// };
// 	// $scope.title = game.title
// 	// $scope.plates= game.plates;
// 		diner.plates().then(function(result){
// 			$scope.plates = result;
// 		})

// });
// 
// 
var Musician = function(sounds) {
    this.sounds = sounds;
};

Musician.prototype.solo = function(length) {
    var solo = "";
    for (var i=0; i<length; i++) {
        solo += this.sounds[i % this.sounds.length] + " ";
    }
    console.log(solo);
};

var Guitarist = function() {
    Musician.call(this, ['Twang', 'Thrumb', 'Bling']);
    this.strings = 6;
};
Guitarist.prototype = Object.create(Musician.prototype);
Guitarist.prototype.constructor = Guitarist;

Guitarist.prototype.tune = function() {
    console.log('Be with you in a moment');
    console.log('Twoning sproing splang');
};

var Bassist = function() {
    Musician.call(this, ['Boink', 'Bow', 'Boom']);
    this.strings = 4;
};
Bassist.prototype = Object.create(Musician.prototype);
Bassist.prototype.constructor = Bassist;

var nigel = new Guitarist();
nigel.tune();
nigel.solo(8);

var derek = new Bassist();
derek.solo(4);