// Find out all odd numbers from given array.
var arrey = [5,4,31,63,54,51,68,77,82];
var AdditionOfOddNumber = 0;
var AdditionOfEvenNumber = 0;
console.log("Odd Numbers")
for (var i = 0; i < arrey.length; i++){
    if (arrey[i] % 2 != 0){
        console.log (arrey[i])
    } 
}
console.log("----------------------------------------------------")

// Find out addition of all odd numbers and even numbers from given array.
for (var i = 0; i < arrey.length; i++){
    if (arrey[i] % 2 != 0){
        console.log(AdditionOfOddNumber, "+", arrey[i], "(Odd)")
        AdditionOfOddNumber = AdditionOfOddNumber + arrey[i]
        console.log("=",AdditionOfOddNumber, "(Value Updated)")
    } else {
        console.log(AdditionOfEvenNumber, "+", arrey[i], "(Even)")
        AdditionOfEvenNumber = AdditionOfEvenNumber + arrey[i]
        console.log("=",AdditionOfEvenNumber, "(Value Updated)")
    }
}

// Find out addition of two numbers from the given array which is equal to the target.
console.log (AdditionOfOddNumber, "Addition of Odd Number")
console.log (AdditionOfEvenNumber, "Addition of Even Number")
console.log("----------------------------------------------------")

var arrey1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5];
var target = 8;

for (var i = 0; i < arrey1.length; i++) {
    for (var j = i + 1; j < arrey1.length; j++) {
        if (arrey1[i] + arrey1[j] == target){
            console.log(arrey1[i],"+",arrey1[j],"=",arrey1[i]+arrey1[j])
        }
    }
}