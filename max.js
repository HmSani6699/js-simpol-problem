var business = 723;
var minister = 698;
var army = 500;

// If Else the largest Number------
//01===
if (business > minister) {
    // console.log('busniess is brgeer');
}
else {
    // console.log('minister is begeeer');
}

//02==
if (business > minister && business > army) {
    // console.log('Busniess is Begeer');
}
else if (minister > business && minister > army) {
    // console.log('minister is Beger');
}
else {
    // console.log('army is Bigeer');
}

//Function The larget Number-----

function isLargest(frist, secont, thart) {
    if (frist < secont && frist < thart) {
        return frist;
    }
    else if (secont < frist && secont < thart) {
        return secont;
    }
    else {
        return thart;
    }
}
var frist = 30;
var secont = 40;
var thart = 50;
var output = isLargest(frist, secont, thart);
// console.log('Number Now', output);

// var max = Math.max(business, minister, army);
// console.log(max, 'Se Sobar boro');


var myMoney = 300;
var yourMoney = 200;

//if else
// if (myMoney > yourMoney) {
//     console.log('My Money Is The Best')
// }
// else {
//     console.log('Your Money IS The Best')
// }

//two parameter us in largest number on function 
// function isBigMoney(myMoney, yourMoney) {
//     if (myMoney > yourMoney) {
//         // return 'My Money Is The Best'
//     }
//     else {
//         // return 'Your Money IS The Best'
//     }
// }
// var myMoney = 100;
// var yourMoney = 200;
// var resuld = isBigMoney(myMoney, yourMoney);
// console.log(resuld);

//three parameter us in largest number on if else 
// var myMoney = 700;
// var yourMoney = 500;
// var bankMOney = 300;

// if (myMoney > yourMoney && myMoney > bankMOney) {
//     // console.log('My money is best');
// }
// else if (yourMoney > myMoney && yourMoney > bankMOney) {
//     // console.log('Your Money is Best');
// }
// else {
//     // console.log('bank money is Best');
// }

// three parameter us in largest number on function
// function largestNumber(frist, second, thard) {

//     if (frist > second && frist > thard) {
//         // return 'Maimona Is the frist'
//     }
//     else if (second > frist && second > thard) {
//         // return 'Adiba is the second'
//     }
//     else {
//         // return 'Toyoba is thard'
//     }
// }
// var frist = 50;
// var second = 70;
// var thard = 30;
// var largest = largestNumber(frist, second, thard);
// // console.log(largest);

// three parameter us in smallest number on function
function largestNumber(frist, second, thard) {

    if (frist < second && frist < thard) {
        return 'Maimona Is the frist'
    }
    else if (second < frist && second < thard) {
        return 'Adiba is the second'
    }
    else {
        return 'Toyoba is thard'
    }
}
var frist = 50;
var second = 70;
var thard = 30;
var largest = largestNumber(frist, second, thard);
// console.log(largest);

function largestNum(frist, second, theard) {
    if (frist > second && frist > theard) {
        return 'she is friest boy'
    }
    else if (second > frist && second > theard) {
        return 'she is second boy'
    }
    else {
        return 'she is theard boy'
    }
}
var output = largestNum(8, 4, 6);
console.log(output);