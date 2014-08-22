'use strict';

describe('Service: edges', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var edges;
  beforeEach(inject(function (_edges_) {
    edges = _edges_;
  }));

  it('should do something', function () {
    expect(!!edges).toBe(true);
  });

});
