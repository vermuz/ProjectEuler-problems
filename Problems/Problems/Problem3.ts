//// Problem 3

//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?

function isPrime(n: number): boolean {
    for (let i: number = 2; i < n; i++) {
        if (n % i == 0 && i != n) return false;
    }
    return true;
}

function primeFactors(n: number): number[] {
    let factors: number[] = [];

    for (let i: number = 2; i <= n; i++) {
        if (n % i == 0) {
            factors.push(i);
            n /= i;
        }
    }
    return factors;
}