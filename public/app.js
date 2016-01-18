var items = [
    {
        id: 1,
        name : "Backflip Baggage",
        price: 10,
        availability: "SOLD-OUT!",
        image: "assets/images/1.png"
    },
    {
        id: 2,
        name : "Street Fight",
        price: 15,
        availability: "AVAILABLE",
        image: "assets/images/2.jpg"
    },
    {
        id: 3,
        name : "Our Own Trumpet",
        price: 12.99,
        availability: "AVAILABLE",
        image: "assets/images/3.png"
    },
    {
        id: 4,
        name : "The Whatsup",
        price: 9.99,
        availability: "AVAILABLE",
        image: "assets/images/4.png"
    },
    {   id: 5,
        name : "Mic MayHire",
        price: 10,
        availability: "SOLD-OUT!",
        image: "assets/images/5.png"
    }
];

angular
    .module('patronApp', [])
    .controller('MainController', function($scope){
        $scope.items = items;

        $scope.cartItems = [];

        $scope.totalCost = 0;

        $scope.addToCart = function(item){
            if ($scope.cartItems.indexOf(item) == -1){
                $scope.cartItems.push(item);
            }
            $scope.calculatePrice();
        };

        $scope.removeFromCart = function(cartItem){
            var idx = $scope.cartItems.indexOf(cartItem);
            $scope.cartItems.splice(idx,1);
            $scope.calculatePrice();
        };

        $scope.calculatePrice = function() {
            $scope.totalCost = 0;
            for(var i = 0; i < $scope.cartItems.length; i++) {
                $scope.totalCost += $scope.cartItems[i].price;
            }
        }



    });