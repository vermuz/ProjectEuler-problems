//// Problem 4
//A palindromic number reads the same both ways.The largest palindrome made from the product of two 2- digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two 3- digit numbers.

function isPalindrome(n: number): boolean {
    let input: string = n.toString();
    let inverse: string = "";

    for (let i: number = input.length - 1; i >= 0; i--) {
        inverse += input.charAt(i);
    }
    return (input == inverse);
}

function Problem4() {
    let product: number = 0;
    let toTest: number;
    for (let x: number = 100; x <= 999; x++) {
        for (let y: number = 100; y <= 999; y++) {
            toTest = x * y;
            if (toTest > product && isPalindrome(toTest)) product = toTest;
        }
    }

    console.log(product);
}
