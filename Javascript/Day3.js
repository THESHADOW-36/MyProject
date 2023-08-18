var start = 30;
var end = 70;
for (var i=start; i <= end; i++)
if (i % 2 == 0){
    console.log(`${i} - Even Number`)
} else {
    console.log(`${i} - Odd Number`)
}

var start = 120;
var end = 300;
var evenCount = 0;
var oddCount = 0;
for (var i = start; i <= end; i++) {
    if (i % 2 !== 0) {
        oddCount++;
    } else {
        evenCount++;
    }
}
console.log(oddCount, "(Total odd number)")
console.log(evenCount, "(Total even number)")

var result = 0;
for (var i = 1; i <= 10; i++){
    if (i % 2 == 0){
        result = result + i;
    }
}
console.log (result, "(Addition of Even Natural Number)")

var number = 6;
var result = 1;
for (var i = 2; i <=number; i++) {
    result = result * i;
}
console.log(result, "(Factorial)")

var num = 4;
var results ;
for (var i = 1; i <= num; i++) {
    if (results == undefined){
        results = i;
    } else {
        results = results * i;
    }
}
console.log(results)