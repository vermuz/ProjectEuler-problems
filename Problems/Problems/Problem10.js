//// Problem 10
//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.
function Problem10() {
    var primes = [];
    for (var n = 2; n < 2000000; n++) {
        if (primes.length === 0) {
            primes.push(n);
        }
        else {
            // we only need to check up to the square root of the number for primes
            var maxToCheck = Math.floor(Math.sqrt(n));
            var isPrime_1 = true;
            // use existing primes to check. why check all when you should only check primes?
            for (var i = 0; primes[i] <= maxToCheck; i++) {
                if (n % primes[i] === 0 && primes[i] !== n) {
                    isPrime_1 = false;
                    break;
                }
            }
            if (isPrime_1)
                primes.push(n);
        }
    }
    // sum them
    console.log(primes.reduce(add));
}
//# sourceMappingURL=Problem10.js.map