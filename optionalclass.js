var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    };
    return Calculator;
}());
var calc = new Calculator();
calc.add(2);
calc.add(2, 3);
calc.add(2, 3, 4);
