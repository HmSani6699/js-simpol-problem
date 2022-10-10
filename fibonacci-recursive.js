//[0,1,1,2,3,5,8,13,21]

function fibonacci(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    const fibo = fibonacci(n - 1)
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}
var output = fibonacci(10)
console.log(output);