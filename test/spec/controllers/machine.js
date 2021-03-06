'use strict';

describe('Controller: MachineCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var MachineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MachineCtrl = $controller('MachineCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
