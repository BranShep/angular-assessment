angular.module('assessment').service('mainService', function($http){
  this.getProducts = function(){
    return $http.get('http://practiceapi.devmounta.in/products').then(function(response){
        return response.data;
    })
  }

  this.getSpecificProduct = function(id){
    return $http.get('http://practiceapi.devmounta.in/products/' + id).then(function(response){
      return response.data;
    });
  }
})
