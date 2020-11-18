(function () {
"use strict";

angular.module('public')
.controller('ProductController', ProductController);

ProductController.$inject = ['menuCategories'];
function ProductController(productCategories) {
  var $ctrl = this;
  $ctrl.productCategories = productCategories;
}


})();
