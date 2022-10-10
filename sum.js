// const number = [23, 48, 54, 92, 40];
// let sum = 0;

// for (let i = 0; i < number.length; i++) {
//     let elimant = number[i]
//     // console.log(elimant)
//     sum = sum + elimant;
// }
// console.log(sum);


// function isNumber(number) {
//     let sum = 0;
//     for (let i = 0; i < number.length; i++) {
//         let elimant = number[i]
//         // console.log(elimant)
//         sum = sum + elimant;
//     }
//     return sum
// }
// var array = [34, 10, 20, 30, 40, 50]
// var output = isNumber(array);
// // console.log(output);


/*function largestNumber(number) {
    let largest = 0;
    for (let i = 0; i < number.length; i++) {
        let elimant = number[i]
        console.log(elimant);
        largest = largest + elimant;
    }
    return largest
}
var oldest = largestNumber([2, 25, 16, 12, 19, 20]);
console.log(oldest);
*/

function arrayPlus(number) {
    var largest = 0;
    for (var i = 0; i < number.length; i++) {
        var elimant = number[i];
        // console.log(elimant);
        largest = largest + elimant;
    }
    return largest;
}
var output = arrayPlus([10, 20, 30, 40,])
// console.log(output);


// function sum(number) {
//     var full = 0;
//     for (var i = 0; i < number.length; i++) {
//         var elimant = number[i]
//         full = elimant + full;
//     }
//     return full
// }
// var output = sum([20, 30, 40])
// console.log(output);


function jugfill(num) {
    var plus = 0;
    for (var i = 0; i < num.length; i++) {
        var elimant = num[i];
        plus = elimant + plus;
    }
    return plus;
}
var array = [10, 5, 15, 20]
var output = jugfill(array)
console.log(output);