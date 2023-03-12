var app = angular.module("apiApp", [])

// app.run(function($rootScope, $http) {
//   console.log("Hi...");
//   $rootScope.productList = []
//   $http
//   .get('https://dummyjson.com/products')
//   .then((res) => {
//     console.log(res.data)
//     $rootScope.productList = res.data.products;
//     console.log( $rootScope.productList );
//   })
// })

app.controller("apiCntrl", function ($scope, $http) {
  $scope.name = "hello";

  $scope.productList = []
  $scope.fetch = function (){
    $http
    .get('https://dummyjson.com/products')
    .then((res) => {
        // console.log(res.data)
        
        $scope.productList = res.data.products;
        console.log($scope.productList)
    })
  }

  $scope.searchCard = function(){

  }
  
});
