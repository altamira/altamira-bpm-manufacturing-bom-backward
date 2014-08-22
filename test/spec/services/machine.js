'use strict';

describe('Service: machine', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var machine;
  beforeEach(inject(function (_machine_) {
    machine = _machine_;
  }));

  it('should do something', function () {
    expect(!!machine).toBe(true);
  });

});
