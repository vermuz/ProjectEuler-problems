//// Problem 6

//The sum of the squares of the first ten natural numbers is,

//    12 + 22 + ... + 102 = 385
//The square of the sum of the first ten natural numbers is,

//    (1 + 2 + ... + 10)2 = 552 = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
function add(a, b) {
    return a + b;
}

function addSquares(a, b) {
    return a + Math.pow(b, 2);
}

function Problem6() {
    var _ = require("underscore");

    const bottomNum: number = 1;
    const topNum: number = 100;



    let numbers: number[] = _.range(bottomNum, topNum + 1);
    let sumSquared: number = Math.pow(numbers.reduce(add, 0), 2);
    let sumOfSquares: number = numbers.reduce(addSquares, 0);
    console.log(sumSquared);
    console.log(sumOfSquares);

    let difference: number = sumSquared - sumOfSquares;

    console.log(difference);
}

