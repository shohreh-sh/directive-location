(function(angular){
'use strict';

 angular
   .module('locationDirectiveApp').controller('MainCtrl', ['$http', mainCtrl]);

  function mainCtrl ($http) {

   var vm = this;

   vm.states = [];
   getStates();



    function getStates (){

   $http.get('/api/states').then(function(response){
   vm.states = response.data;
   console.log(vm.states);
   });
   };

  }})(window.angular);
