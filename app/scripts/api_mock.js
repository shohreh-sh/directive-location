angular
  .module('apiLocationDirectiveApp', ['locationDirectiveApp', 'ngMockE2E'])
  .run(function ($httpBackend) {
    'use strict';
    $httpBackend.whenGET(/^views\//).passThrough();
    $httpBackend.whenGET(/^res\//).passThrough();

    /* backend API calls here */

    $httpBackend.whenGET(/^\/api\/states/).respond(200, states);

  });
if (angular.mock) {
  angular.element(document).ready(function () {
    'use strict';
    angular.bootstrap(document, ['apiLocationDirectiveApp']);
  });
}
