Pie = require('../src/scripts/canvas-pie.js');

console.log(Pie.d2r);

describe("canvas pie shape", function() {
  
  it("is sane", function() {
    expect(true).toBe(true);
  });
  
  it("can convert degrees to radians", function() {
    // clever floating point rounding technique via found:
    // http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript
    var exp = +Pie.d2r(57.2957795).toFixed(5); // 57.2957795 degrees ~ 1 rad
    expect(exp).toEqual(1, 'conversion was wrong, should be 1');
    var exp = +Pie.d2r(1).toFixed(6);
    expect(exp).toEqual(0.017453, 'conversion was wrong, should be 0.017453');
  });
  
});
