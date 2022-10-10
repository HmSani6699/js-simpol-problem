var first = 5;
var second = 7;
// console.log(first, second);
//First Apros
// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// dectructing
[first, second] = [second, first];
// console.log(first, second);


var num1 = 5;
var num2 = 9;
// var tamp = num1;
// num1 = num2;
// num2 = tamp;
// console.log(num1, num2);


[num1, num2] = [num2, num1];
// console.log(num1, num2);



var frist = 2;
var second = 4;
var temp = frist;
frist = second;
second = temp;
// console.log(frist, second);



var frist = 2;
var second = 4;
[frist, second] = [second, frist];
// console.log(frist, second);

var num1 = 3;
var num2 = 5;
var num3 = num1;
num1 = num2;
num2 = num3;
// console.log(num1, num2);


var num1 = 3;
var num2 = 5;
console.log(num1, num2);
[num1, num2] = [num2, num1];
console.log(num1, num2);