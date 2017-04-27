//// problem 9
//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//    a^2 + b^2 = c^2
//For example, 32 + 42 = 9 + 16 = 25 = 52.
//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.
function Problem9() {
    var m = 0;
    var n = 2;
    do {
        m = (500 / n) - n;
        if ((m < n) && (Math.floor(m) === m)) {
            console.log(n);
            break;
        }
        n++;
    } while (true);
    var a = Math.pow(n, 2) - Math.pow(m, 2);
    var b = 2 * n * m;
    var c = Math.pow(n, 2) + Math.pow(m, 2);
    console.log(a * b * c);
}
//# sourceMappingURL=Problem9.js.map