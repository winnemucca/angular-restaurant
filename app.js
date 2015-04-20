var app = angular.module('dinerApp', ['ngRoute',]);
app.config(function($routeProvider){
  $routeProvider.when('/basque',{
    templateUrl:"./client/app.html",
    controller: 'AppCtrl'
  })
  .when('/menu',{
    templateUrl:"./client/menu.html",
    controller:'MenuCtrl'
    // controller:'DinnerCtrl'
  })
  .when('/checkout',{
    templateUrl:"./client/checkout.html",
    controller: 'CheckCtrl'

  })
  .otherwise({
    redirectTo: '/basque'
  });
});

app.factory('Plate', function(){

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

  // var Sides = function(name,price,ingredients){
  //     Plate.call(this,name,price, ingredients);
  //     this.side = true;
  //     this.addOn = price/2;
  //     }
  // Sides.prototype = new Plate();

  // var Deserts = function(name, price,description){
  //   Plate.call(this,name,price,description);
  //   this.desert = true;
  // }
  // Deserts.prototype = new Plate();

  return Plate;


})

app.controller('CheckCtrl',function($scope){
  console.log('check out is activated');
})
app.controller('AppCtrl',function($scope){
  console.log('app is activated');

})

app.controller('MenuCtrl', function($scope,Plate) {
  // deserts 
    // var plates = [
    //   {
    //     name: 'Ice Cream',
    //     description: 'Homemade ice cream comes in two flavors of chocolate and vanilla',
    //     price: 4
    //   },
    //   {
    //     name: 'Ice Cream',
    //     description: 'Homemade ice cream comes in two flavors of chocolate and vanilla',
    //     price: 4
    //   }

    // ];
    // var desertMenu = plates.map(function(plate){
    //   return new Plate(plate.name,plate.description,plate.price);
    // })

    var iceCream = new Plate('Ice Cream','Homemade ice cream comes in two flavors of chocolate and vanilla', 4.00);
    var cheeseCake = new Plate('Cheese Cake', 'Creamy cheese cake with grahm cracker crust', 6.00);
    var desertMenu = [];
    desertMenu.push(iceCream,cheeseCake);
    $scope.desertMenu = desertMenu;

    var checkout = [];
    $scope.doSomething = function(plate){
      // var checkout = [];
      var userChoice = {};
      userChoice.name = plate.name;
      userChoice.price = plate.price;

      console.log(plate);
      console.log(userChoice);
      checkout.push(userChoice);
      
      // checkout.push(plate.price);
      // console.log(plate.name,plate.price);
      console.log(checkout);
      return userChoice;
    }
    

    $scope.checkout  = checkout;
    console.log('checkout',$scope.checkout);

  // sides
    var soupOfDay = new Plate('Soup of the Day','side',5.50);
    var stewOfDay = new Plate('Stew of the Day','side',7.50);
    var sweetBread = new Plate('sweetBread','side',8.00);
    var salFry = new Plate ('Half Salad & Half French Fries','side',6.00);
    var Fries = new Plate ('Basket of Fries','side', 4.50);
    var cupBeans = new Plate ('Cup of Beans', 'side',2.25);
    var sideMenu = [];
    sideMenu.push(soupOfDay,stewOfDay,sweetBread,salFry,Fries,cupBeans);
    $scope.sideMenu = sideMenu;


  // lunch menu
    var steakSandwich= new Plate('Steak Sandwich', 'Something nice and tasty', 11.75);
    var lambShoulderSteak = new Plate('Lamb Shoulder Steak','Something Different', 11.75);
    var lambChops = new Plate('Lamb Chops', 'why not', 14.75);
    var chickenSandwich = new Plate('chicken Breast Sandwich', 'basque chicken on a bun',9.75);
    var basqueBurger = new Plate('Basco Burger', 'a better burger', 9.75);

    var lunchMenu = [];
    lunchMenu.push(steakSandwich, lambShoulderSteak,lambChops,chickenSandwich,basqueBurger);
    $scope.plates = lunchMenu;
  // angular.forEach(diner, function (plate) {
  //   console.debug(plate.toString());
  // });
    var topSirlion = new Plate('Top Sirloin Steak', 'juicy steak', 24);
    var lambShoulderSteak = new Plate ('Lamb Shoulder Steak', 'interesting take', 24);
    var LambChopsDinner = new Plate('Lamb Chops','hell of  a way to go',24);
    var basqueChicken = new Plate('Basque Chicken','seasoned with esperette peppers');
    var pigFeet = new Plate('Pigs feet with Tripe','??? why would you', 24);
    var dinnerMenu = [];

    dinnerMenu.push(topSirlion,lambShoulderSteak,LambChopsDinner,basqueChicken,pigFeet);

    $scope.dinnerOptions = dinnerMenu;

});
// **************** cannot add multiple controllers to a templateUrl**********
