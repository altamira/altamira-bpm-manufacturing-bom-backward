'use strict';

describe('Service: nodes', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var nodes;
  beforeEach(inject(function (_nodes_) {
    nodes = _nodes_;
  }));

  it('should do something', function () {
    expect(!!nodes).toBe(true);
  });

});
