'use strict';

describe('Service: vertex', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var vertex;
  beforeEach(inject(function (_vertex_) {
    vertex = _vertex_;
  }));

  it('should do something', function () {
    expect(!!vertex).toBe(true);
  });

});
