//// Problem 6
//The sum of the squares of the first ten natural numbers is,
//    12 + 22 + ... + 102 = 385
//The square of the sum of the first ten natural numbers is,
//    (1 + 2 + ... + 10)2 = 552 = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
function Problem6() {
    var _ = require("underscore");
    var bottomNum = 1;
    var topNum = 100;
    function add(a, b) {
        return a + b;
    }
    function addSquares(a, b) {
        return a + Math.pow(b, 2);
    }
    var numbers = _.range(bottomNum, topNum + 1);
    var sumSquared = Math.pow(numbers.reduce(add, 0), 2);
    var sumOfSquares = numbers.reduce(addSquares, 0);
    console.log(sumSquared);
    console.log(sumOfSquares);
    var difference = sumSquared - sumOfSquares;
    console.log(difference);
}
//# sourceMappingURL=Problem6.js.map