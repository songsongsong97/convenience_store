(function() {
"use strict";
/**
 * Public hola mart application. Includes the common module and ui-router.
 */
angular.module('public', ['ui.router'])
.constant('ApiPath', 'https://ychaikin-course5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
