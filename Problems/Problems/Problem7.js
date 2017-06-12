//// Problem 7
//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10 001st prime number?
function Problem7() {
    let primeCount = 0;
    let n = 1;
    do {
        n++;
        if (isPrime(n)) {
            primeCount++;
        }
    } while (primeCount < 10001);
    console.log(n);
}
//# sourceMappingURL=Problem7.js.map