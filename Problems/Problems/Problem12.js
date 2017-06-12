// Problem 12
//The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
//Let us list the factors of the first seven triangle numbers:
//1: 1
//3: 1, 3
//6: 1, 2, 3, 6
//10: 1, 2, 5, 10
//15: 1, 3, 5, 15
//21: 1, 3, 7, 21
//28: 1, 2, 4, 7, 14, 28
//We can see that 28 is the first triangle number to have over five divisors.
//What is the value of the first triangle number to have over five hundred divisors?
function triangleNumber(n) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = 0;
        for (let i = 0; i <= n; i++) {
            result += i;
        }
        return new Promise(r => result);
    });
}
function getDivisors(n) {
    return __awaiter(this, void 0, void 0, function* () {
        let divisors = [];
        const upper = Math.floor(n / 2);
        divisors.push(1);
        for (let i = 2; i <= upper; i++) {
            if (n % i === 0)
                divisors.push(i);
        }
        divisors.push(n);
        return new Promise(r => divisors);
    });
}
function Problem12() {
    return __awaiter(this, void 0, void 0, function* () {
        let divisors = [];
        let n = 0;
        let triangleNum = 0;
        do {
            n++;
            triangleNum = yield triangleNumber(n);
            divisors = yield getDivisors(triangleNum);
        } while (divisors.length <= 501);
        console.log(divisors);
        console.log(triangleNum);
    });
}
//# sourceMappingURL=Problem12.js.map