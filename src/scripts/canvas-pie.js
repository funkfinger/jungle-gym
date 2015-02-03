var Pie = function (canvas) {
  this.canvas = canvas;
  this.context = canvas.getContext('2d');
  context.save();
};

Pie.prototype.drawSlice = function () {
  console.log('moving pies');
};

Pie.d2r = function (degrees) {
  // returns degrees to radians...
  return (degrees * Math.PI)/180;
};

module.exports = Pie;

