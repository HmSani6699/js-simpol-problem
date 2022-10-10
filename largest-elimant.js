// function largestNumber(number) {
//     let largest = 0;
//     for (let i = 0; i < number.length; i++) {
//         let elimant = number[i];
//         if (elimant > largest) {
//             largest = elimant;
//         }
//     }
//     return largest;
// }
// var ages = [7, 25, 16, 12, 19, 20];
// var oldest = largestNumber(ages);
// console.log(oldest);


// function largestElimant(number) {
//     let largest = number[0];
//     for (let i = 0; i < number.length; i++) {
//         let elimant = number[i];
//         // console.log(elimant);
//         if (elimant > largest) {
//             largest = elimant;
//         }
//     }
//     return largest
// }

// let ageest = [12, 37, 26, 13, 25, 37];
// let mines = [-12, -5, -13, -9]
// let oldest2 = largestElimant(mines);
// console.log('oldest2', oldest2);

// var arr = [4, 5, 7, 2, 7, 3, 1]
// var smalest = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < smalest) {
//         smalest = arr[i]
//     }
// }
// console.log(smalest);
// function smalestNumber(number) {
//     let smalest = number[0];
//     for (let i = 0; i < number.length; i++) {
//         // console.log(i);
//         if (number[i] < smalest) {
//             smalest = number[i]
//         }
//     }
//     return smalest;
// }

// let numbers = [12, 4, 6, 7, 9, 24,];
// let mySmalset = smalestNumber(numbers);
// console.log(mySmalset);


/*function largestNumber(number) {
    var largest = 0;
    for (var i = 0; i < number.length; i++) {
        var elimant = number[i]
        if (elimant > largest) {
            largest = elimant
        }
    }
    return largest;
}
var output = largestNumber([12, 34, 21, 56, 34, 26,])
console.log(output)
*/

function largestNumber(number) {
    var largest = 0;
    for (var i = 0; i < number.length; i++) {
        var elimant = number[i]
        if (elimant > largest) {
            largest = elimant
        }

    }
    // return largest;
}
// console.log(largestNumber([21, 16, 24, 10, 28, 13]));

// var number = [12, 27, 20, 83, 29, 100, 39]
// var min = Math.min(...number);
// console.log(min);


// var smallest = arr[0];
// for (var i = 1; i < arr.length; i++) {
//     var elimant = arr[i]
//     if (elimant < smallest) {
//         smallest = elimant;
//     }
// }

// console.log(smallest);
// var arr = [4, 1, 9, 5];


var number = [2, 5, 3, 7, 1, 20]
var largest = number[0];
for (var i = 0; i < number.length; i++) {
    var elimant = number[i]
    if (elimant < largest) {
        largest = elimant
    }
}
// console.log(largest)


// var number = []




/*
 find to array largest number on js forloop 

var number = [9, 6, 8, 3, 5, 11, 2];
var largest = 0;
for (var i = 0; i < number.length; i++) {
    var elimant = number[i];
    // console.log(elimant);
    if (elimant > largest) {
        largest = elimant;
    }
}
console.log(largest);



// using or function

function largestNumber(number) {
    var largest = 0;
    for (var i = 0; i < number.length; i++) {
        var elimant = number[i];
        if (elimant > largest) {
            largest = elimant
        }
    }
    return largest
}
var output = largestNumber([3, 6, 16, 9, 7])
console.log(output);

*/



/* find to array smollst number on js forloop

var smollstNumber = [12, 5, 4, 8, 6, 2];
var smollest = smollstNumber[0];
for (var i = 0; i < smollstNumber.length; i++) {
    var elimant = smollstNumber[i]
    // console.log(elimant);
    if (smollest > elimant) {
        smollest = elimant;
    }
}
// console.log(smollest);

// using or function
function smallestNumber(number) {
    var smollest = number[0];
    for (var i = 0; i < number.length; i++) {
        var elimant = number[i]
        // console.log(elimant);
        if (smollest > elimant) {
            smollest = elimant;
        }
    }
    return smollest;
}
var array = [9, 4, 1, 8, 7, 5];
var output = smallestNumber(array);
console.log(output);

*/

/*
function largestNumber(number) {
    var largest = 0;
    for (var i = 0; i < number.length; i++) {
        var elimant = number[i];
        if (elimant > largest) {
            largest = elimant;
        }
    }
    return largest;
}
var array = [10, 20, 30, 50, 12];
var output = largestNumber(array);
console.log(output);

*/
function smollestNumber(number) {
    var smollest = number[0];
    for (var i = 0; i < number.length; i++) {
        var elimant = number[i];
        if (elimant < smollest) {
            smollest = elimant;
        }
    }
    return smollest;
}
var array = [9, 7, 5, 3, 8, 2, 4];
var output = smollestNumber(array);
console.log(output);