'use strict';

describe('Service: operator', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var operator;
  beforeEach(inject(function (_operator_) {
    operator = _operator_;
  }));

  it('should do something', function () {
    expect(!!operator).toBe(true);
  });

});
