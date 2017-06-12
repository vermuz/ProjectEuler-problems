//// Problem 4
//A palindromic number reads the same both ways.The largest palindrome made from the product of two 2- digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3- digit numbers.
function isPalindrome(n) {
    let input = n.toString();
    let inverse = "";
    for (let i = input.length - 1; i >= 0; i--) {
        inverse += input.charAt(i);
    }
    return (input == inverse);
}
function Problem4() {
    let product = 0;
    let toTest;
    for (let x = 100; x <= 999; x++) {
        for (let y = 100; y <= 999; y++) {
            toTest = x * y;
            if (toTest > product && isPalindrome(toTest))
                product = toTest;
        }
    }
    console.log(product);
}
//# sourceMappingURL=Problem4.js.map