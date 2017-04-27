//// Problem 5
//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
function isDivisibleRange(n, start, end) {
    var result = true;
    for (var i = start; i <= end; i++) {
        result = n % i == 0;
        if (!result)
            break;
    }
    return result;
}
function Problem5() {
    var findIt = 1;
    while (!isDivisibleRange(findIt, 1, 20)) {
        findIt++;
    }
    console.log(findIt);
}
//# sourceMappingURL=Problem5.js.map