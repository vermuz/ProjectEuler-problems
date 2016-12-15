//  Problem 1:
//let sum: number = 0;
//for (let i: number = 0; i < 1000; i++) {
//    if (i % 3 == 0 || i % 5 == 0) {
//        console.log(i.toString() + "\n");
//        sum += i;
//    }
//}
//console.log("results: " + sum.toString());
// Problem 2:
//let evens: number[] = [];
function fib(n) {
    if (n <= 2) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
}
//let result: number = 0;
//let counter: number = 1;
//let sum: number = 0;
//do {
//    result = fib(counter);
//    if (result % 2 == 0)
//        sum += result;
//    counter++;
//}
//while (result < 4000000);
//console.log(sum);
// Problem 3
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0 && i != n)
            return false;
    }
    return true;
}
function primeFactors(n) {
    let factors = [];
    for (let i = 2; i <= n; i++) {
        if (n % i == 0) {
            factors.push(i);
            n /= i;
        }
    }
    return factors;
}
//console.log(primeFactors(13195));
//console.log(primeFactors(600851475143));
// Problem 4
function isPalindrome(n) {
    let input = n.toString();
    let inverse = "";
    for (let i = input.length - 1; i >= 0; i--) {
        inverse += input.charAt(i);
    }
    return (input == inverse);
}
//let product: number = 0;
//let toTest: number;
//for (let x: number = 100; x <= 999; x++) {
//    for (let y: number = 100; y <= 999; y++) {
//        toTest = x * y;
//        if (toTest > product && isPalindrome(toTest)) product = toTest;
//    }
//}
//console.log(product);
// Problem 5
function isDivisibleRange(n, start, end) {
    let result = true;
    for (let i = start; i <= end; i++) {
        result = n % i == 0;
        if (!result)
            break;
    }
    return result;
}
//let findIt: number = 1;
//while (!isDivisibleRange(findIt, 1, 20)) {
//    findIt++;
//}
//console.log(findIt);
// Problem 6
//var _ = require("underscore");
//const bottomNum: number = 1;
//const topNum: number = 100;
function add(a, b) {
    return a + b;
}
function addSquares(a, b) {
    return a + Math.pow(b, 2);
}
//let numbers: number[] = _.range(bottomNum, topNum + 1);
//let sumSquared: number = Math.pow(numbers.reduce(add, 0), 2);
//let sumOfSquares: number = numbers.reduce(addSquares, 0);
//console.log(sumSquared);
//console.log(sumOfSquares);
//let difference: number = sumSquared - sumOfSquares;
//console.log(difference);
// Problem 7
//function isPrime(n: number): boolean {
//    for (let i: number = 2; i < n; i++) {
//        if (n % i == 0 && i != n) return false;
//    }
//    return true;
//}
//let primeCount: number = 0;
//let n: number = 1;
//do {
//    n++;
//    if (isPrime(n)) {
//        primeCount++;
//    }
//}
//while (primeCount < 10001)
//console.log(n); 
//# sourceMappingURL=old.js.map