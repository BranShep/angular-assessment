angular.module('assessment')
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/");

        $stateProvider
          .state('home', {
            url: "/",
            templateUrl: 'views/home.html'
          })
          .state('shop', {
            url:"/shop",
            templateUrl: "views/shop.html"
          })
          .state('blog', {
            url:"/blog",
            templateUrl: "views/blog.html"
          })
          .state('product-details', {
            url:"/product-details",
            templateUrl: "views/product-details.html"
          })
          .state('product-tmpl', {
            url:"/product-tmpl",
            templateUrl: "views/product-tmpl.html"
          })
          .state('about', {
            url:"/about",
            templateUrl: "views/about.html"
          });
});
