Pie = require('../src/scripts/canvas-pie.js');

console.log(Pie.d2r);

describe("canvas pie shape", function() {
  
  it("is sane", function() {
    expect(true).toBe(true);
  });
  
  it("can convert degrees to radians", function() {
    var exp = Math.round(10000 * Pie.d2r(90)) / 10000;
    expect(exp).toEqual(1.5708, 'conversion was wrong, should be 1.57079633');
  });
  
});
