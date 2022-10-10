//[0,1,1,2,3,5,13,18,31,39]
/*
3rd=2nd + 1st
4th=3rd + 2nd
nth=(n-1)th +(n-2)th
ith=(i-1)th +(i-2)th
*/

// const fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);


//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

/*

3th = 2rd + 1st;
4th = 3rd + 2rd;
5th = 4th + 3rd;
6th = 5th + 4th;
nth = [n - 1]th + [n - 2]th;

*/
const fibo = [0, 1]
for (var i = 2; i < 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
// console.log(fibo);

function fibonacciCiris(num) {
    if (typeof num != 'number') {
        return 'plse enter your number'
    }
    if (num < 2) {
        return 'ami onek choto '
    }

    var fibo = [0, 1]
    for (var i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var fibonacci = fibonacciCiris(3);
console.log(fibonacci);