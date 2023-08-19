var array = [1, 4, 5, 6, 5, 6, 8, 2, 3, 5, 4, 8, 9];
var target = 8;
for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
        for (var k = j + 1; k < array.length; k++) {
            if (array[i] + array[j] + array[k] == target) {
                console.log(array[i], "+", array[j], '+', array[k], "=", array[i] + array[j] + array[k])
            }
        }
    }
}
console.log("-----------------------------------------------------")
function Welcome(name, age, city) {
    console.log(`Myself ${name} my age is ${age} i am from ${city}`)
}
Welcome("Dinesh", "21", "Thane")
console.log("-----------------------------------------------------")
var array1 = [3, 2, 1, 6, 45, 6, 75, 4, 33, 69]
function sumOfAllNumbers(array1){
    var result = 0;
    for (var i = 0; i< array1.length; i++)[
        result = result + array1[i]
    ]
    return result;
}
console.log(sumOfAllNumbers(array1))
console.log("-----------------------------------------------------")
var array2 = [45, 88,33, 96, 45, 12, 5, 33, 18, 79];
var target = 33;
function find(array2, target) {
    var count = 0;
    for (var i = 0; i < array2.length; i++) {
        if (array2[i] == target) {
            return "Got it"
        }
    }
    return "Nope"
}
console.log(find(array2, target))
console.log("-----------------------------------------------------")