function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

function Square(length) {
    this.width = this.height = length;
}

Rectangle.prototype.area = function() {
    return this.width * this.height;
};

Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.diagonal = function() {
    return Math.sqrt(this.area() * 2);
};


var rect = new Rectangle(3, 4);
var sq = new Square(4);

console.log("width = " + rect.width);
console.log("height = " + rect.height);
console.log("area of a rectangle = " + rect.area());
console.log('area of a square = ' + sq.area());
console.log('area of a diagonal = ' + sq.diagonal());