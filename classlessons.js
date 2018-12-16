//Group Variables (Properties) and functions (methods) that are highly related.
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x + ',Y:' + this.y);
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
