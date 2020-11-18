(function () {
"use strict";

angular.module('public')
.component('productCategory', {
  templateUrl: 'src/public/product-category/product-category.html',
  bindings: {
    category: '<'
  }
});



})();
