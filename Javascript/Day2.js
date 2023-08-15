// Data type 

// 1. Conditional Statement

// Types:
// i. if else,
// ii. Switch

// i. if else:
//     Syntax:

//     if () {

//     } else if {

//     } else {

//     }

//         Symbol:

//     = (Value assign)

//     == (Compare only data)

//     === (comparision of data + data type)

//     && (All condition must be true)

//     || (Any one of the condition must be true)

// for (starting, ending, sequence) {
//     console.log()
// }


var age = 55;

if (age > 18) {
    console.log("You are older than 18")
} else {
    console.log("You are younger than 18")
}

var age = 16
var had = false;

if (age > 18 && age <= 80) {
    console.log(`You are eligible for registration - (Age = ${age})`)
} else {
    console.log(`You are not eligible for registration - (Age = ${age})`)
}


var age = 72;
var had = false;

if (age > 18 && age <= 80 && had == false) {
    console.log(`You are eligible for DL - (Age = ${age})`)
} else if (age == 18) {
    console.log(`You are eligible for LL - (Age = ${age})`)
} else {
    console.log(`You are not eligible for DL - (Age = ${age})`)
}

var text = "Ascending";
console.log(text)
for (var i = 1; i <= 10; i = i + 1) {
    console.log(i)
}

var text = "Descending ";
console.log(text)
for (var i = 10; i > 0; i = i - 1) {
    console.log(i)
}