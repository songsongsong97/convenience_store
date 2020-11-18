(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home.html',
      controller: 'ProductController',
      controllerAs: 'ProductCtrl',
      resolve: {
        menuCategories: ['ProductService', function (ProductService) {
          return ProductService.getCategories();
        }]
      }
    })
    // .state('public.menu', {
    //   url: '/menu',
    //   templateUrl: 'src/public/menu/menu.html',
    //   controller: 'MenuController',
    //   controllerAs: 'menuCtrl',
    //   resolve: {
    //     menuCategories: ['MenuService', function (MenuService) {
    //       return MenuService.getCategories();
    //     }]
    //   }
    // });
}
})();
