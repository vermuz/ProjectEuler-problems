﻿//// Problem 5
//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
function isDivisibleRange(n: number, start: number, end: number): boolean {
    let result: boolean = true;
    for (let i = start; i <= end; i++) {
        result = n % i == 0;
        if (!result) break;
    }
    return result;
}

function Problem5()
{
    let findIt: number = 1;

    while (!isDivisibleRange(findIt, 1, 20)) {
        findIt++;
    }

    console.log(findIt);
}
