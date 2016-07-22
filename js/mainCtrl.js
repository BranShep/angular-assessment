angular.module('assessment').controller('mainCtrl', function($scope, mainService){
  $scope.test = "test is working";

  $scope.getProducts = function() {
    mainService.getProducts().then(function(response){
      $scope.products = response;
      console.log(response);
    });
  }

  $scope.getProducts();

  $scope.getSpecificProduct = function(product) {
    mainService.getSpecificProduct(product).then(function(response){
      $scope.specificProduct = response;
      console.log(response);
    })
  }
})
