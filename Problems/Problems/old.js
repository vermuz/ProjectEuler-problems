////  Problem 1:
////let sum: number = 0;
////for (let i: number = 0; i < 1000; i++) {
////    if (i % 3 == 0 || i % 5 == 0) {
////        console.log(i.toString() + "\n");
////        sum += i;
////    }
////}
////console.log("results: " + sum.toString());
//// Problem 2:
////let evens: number[] = [];
//fib(n: number): number {
//    if (n <= 2) {
//        return 1;
//    }
//    else {
//        return this.fib(n - 1) + this.fib(n - 2);
//    }
//}
////let result: number = 0;
////let counter: number = 1;
////let sum: number = 0;
////do {
////    result = fib(counter);
////    if (result % 2 == 0)
////        sum += result;
////    counter++;
////}
////while (result < 4000000);
////console.log(sum);
//// Problem 3
//isPrime(n: number): boolean {
//    for (let i: number = 2; i < n; i++) {
//        if (n % i == 0 && i != n) return false;
//    }
//    return true;
//}
//primeFactors(n: number): number[] {
//    let factors: number[] = [];
//    for (let i: number = 2; i <= n; i++) {
//        if (n % i == 0) {
//            factors.push(i);
//            n /= i;
//        }
//    }
//    return factors;
//}
//// Problem 4
//isPalindrome(n: number): boolean {
//    let input: string = n.toString();
//    let inverse: string = "";
//    for (let i: number = input.length - 1; i >= 0; i--) {
//        inverse += input.charAt(i);
//    }
//    return (input == inverse);
//}
////let product: number = 0;
////let toTest: number;
////for (let x: number = 100; x <= 999; x++) {
////    for (let y: number = 100; y <= 999; y++) {
////        toTest = x * y;
////        if (toTest > product && isPalindrome(toTest)) product = toTest;
////    }
////}
////console.log(product);
//// Problem 5
//isDivisibleRange(n: number, start: number, end: number): boolean {
//    let result: boolean = true;
//    for (let i = start; i <= end; i++) {
//        result = n % i == 0;
//        if (!result) break;
//    }
//    return result;
//}
////let findIt: number = 1;
////while (!isDivisibleRange(findIt, 1, 20)) {
////    findIt++;
////}
////console.log(findIt);
//// Problem 6
////var _ = require("underscore");
////const bottomNum: number = 1;
////const topNum: number = 100;
//add(a, b) {
//    return a + b;
//}
//addSquares(a, b) {
//    return a + Math.pow(b, 2);
//}
////let numbers: number[] = _.range(bottomNum, topNum + 1);
////let sumSquared: number = Math.pow(numbers.reduce(add, 0), 2);
////let sumOfSquares: number = numbers.reduce(addSquares, 0);
////console.log(sumSquared);
////console.log(sumOfSquares);
////let difference: number = sumSquared - sumOfSquares;
////console.log(difference);
//// Problem 7
////function isPrime(n: number): boolean {
////    for (let i: number = 2; i < n; i++) {
////        if (n % i == 0 && i != n) return false;
////    }
////    return true;
////}
////let primeCount: number = 0;
////let n: number = 1;
////do {
////    n++;
////    if (isPrime(n)) {
////        primeCount++;
////    }
////}
////while (primeCount < 10001)
////console.log(n);
//// Problem 8
////let bigNumString: string = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';
////const len: number = 13;
////let product: number = 0;
////for (let index: number = 0; index < bigNumString.length - len; index++) {
////    // sum each element up to len
////    let miniProduct: number = 1;
////    for (let element: number = 0; element < len; element++) {
////        miniProduct *= parseInt(bigNumString[index + element]);
////    }
////    if (miniProduct > product) product = miniProduct;
////}
////console.log(product);
//// problem 9
////let m: number = 0;
////let n: number = 2;
////do {
////    m = (500 / n) - n;
////    if ((m < n) && (Math.floor(m) === m)) {
////        console.log(n);
////        break;
////    }
////    n++;
////} while (true === true);
////let a = Math.pow(n, 2) - Math.pow(m, 2);
////let b = 2 * n * m;
////let c = Math.pow(n, 2) + Math.pow(m, 2);
////console.log(a * b * c);
//// Problem 10
//let primes: number[] = [];
//function add(a, b) {
//    return a + b;
//}
//for (let n = 2; n < 2000000; n++) {
//    if (primes.length === 0) {
//        primes.push(n);
//    } else {
//        // we only need to check up to the square root of the number for primes
//        let maxToCheck = Math.floor(Math.sqrt(n));
//        let isPrime = true;
//        // use existing primes to check. why check all when you should only check primes?
//        for (let i: number = 0; primes[i] <= maxToCheck; i++) {
//            if (n % primes[i] === 0 && primes[i] !== n) {
//                isPrime = false;
//                break;
//            }
//        }
//        if (isPrime) primes.push(n);
//    }
//}
//// sum them
//console.log(primes.reduce(add)); 
//# sourceMappingURL=old.js.map