//  Problem 1
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

function Problem1() {
    let sum: number = 0;
    for (let i: number = 0; i < 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i.toString() + "\n");
            sum += i;
        }
    }
    console.log("results: " + sum.toString());
}
