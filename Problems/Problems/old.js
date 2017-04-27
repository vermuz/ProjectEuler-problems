//// Problem 10
//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.
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
//// Problem 11
//In the 20×20 grid below, four numbers along a diagonal line have been marked in red.
//08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
//49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
//81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
//52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
//22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
//24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
//32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
//67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
//24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
//21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
//78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
//16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
//86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
//19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
//04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
//88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
//04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
//20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
//20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
//01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48
//The product of these numbers is 26 × 63 × 78 × 14 = 1788696.
//What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?
//// get the grid in proper addressable format
//function getRight(grid: number[][], x: number, y: number): number {
//    let result: number[] = [];
//    for (let i = 0; i < sizeToGet; i++) {
//        result.push(grid[y][x + i]);
//    }
//    return result.reduce((a, b) => a * b);
//}
//function getDown(grid: number[][], x: number, y: number): number {
//    let result: number[] = [];
//    for (let i = y; i < y + sizeToGet; i++) {
//        result.push(grid[i][x]);
//    }
//    return result.reduce((a, b) => a * b);
//}
//function getDiagNW2SE(grid: number[][], x: number, y: number): number {
//    let result: number[] = [];
//    for (let i = 0; i < sizeToGet; i++) {
//        result.push(grid[y + i][x + i]);
//    }
//    return result.reduce((a, b) => a * b);
//}
//function getDiagSW2NE(grid: number[][], x: number, y: number): number {
//    let result: number[] = [];
//    for (let i = 0; i < sizeToGet; i++) {
//        result.push(grid[y - i][x + i]);
//    }
//    return result.reduce((a, b) => a * b);
//}
//let gridStrings: string[] = [];
//gridStrings.push("08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08");
//gridStrings.push("49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00");
//gridStrings.push("81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65");
//gridStrings.push("52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91");
//gridStrings.push("22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80");
//gridStrings.push("24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50");
//gridStrings.push("32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70");
//gridStrings.push("67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21");
//gridStrings.push("24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72");
//gridStrings.push("21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95");
//gridStrings.push("78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92");
//gridStrings.push("16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57");
//gridStrings.push("86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58");
//gridStrings.push("19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40");
//gridStrings.push("04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66");
//gridStrings.push("88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69");
//gridStrings.push("04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36");
//gridStrings.push("20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16");
//gridStrings.push("20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54");
//gridStrings.push("01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48");
//let grid: Array<number>[] = [];
//const sizeToGet = 4;
//for (let i: number = 0; i < gridStrings.length; i++) {
//    let numbers = gridStrings[i].split(" ");
//    let result = numbers.map((x) => parseInt(x, 10));
//    grid.push(result);
//}
//let yLastIndex = grid.length - 1;
//let final = 0;
//for (let y = 0; y < grid.length; y++) {
//    let xLastIndex = grid[y].length - 1;
//    for (let x = 0; x < grid[y].length; x++) {
//        let result: number = 0;
//        // right
//        if ((x + (sizeToGet - 1)) <= xLastIndex) {
//            result = getRight(grid, x, y);
//            if (result > final) final = result;
//        }
//        // down
//        if ((y + (sizeToGet - 1)) <= yLastIndex) {
//            result = getDown(grid, x, y);
//            if (result > final) final = result;
//        }
//        //// NWSE
//        if ((x - (sizeToGet - 1)) >= 0 && (y + (sizeToGet - 1)) <= yLastIndex) {
//            result = getDiagNW2SE(grid, x, y);
//            if (result > final) final = result;
//        }
//        //// SWNE
//        if ((x + (sizeToGet - 1)) <= xLastIndex && (y - (sizeToGet - 1)) >= 0) {
//            result = getDiagSW2NE(grid, x, y);
//            if (result > final) final = result;
//        }
//    }
//}
//console.log(final); 
//# sourceMappingURL=old.js.map