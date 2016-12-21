// Problem 10
let primes: number[] = [];

function add(a, b) {
    return a + b;
}

for (let n = 2; n < 2000000; n++) {
    if (primes.length === 0) {
        primes.push(n);
    } else {
        // we only need to check up to the square root of the number for primes
        let maxToCheck = Math.floor(Math.sqrt(n));
        let isPrime = true;
        // use existing primes to check. why check all when you should only check primes?
        for (let i: number = 0; primes[i] <= maxToCheck; i++) {
            if (n % primes[i] === 0 && primes[i] !== n) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(n);
    }
}
// sum them
console.log(primes.reduce(add));
