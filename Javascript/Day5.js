var arrey = [5,4,31,63,54,51,68,77,82];
var AdditionOfOddNumber = 0;
var AdditionOfEvenNumber = 0;

for (var i = 0; i < arrey.length; i++){
    if (arrey[i] % 2 != 0){
        console.log (i,"-",arrey[i], "(Odd Numbers)")
    } else {
        console.log (i,"-",arrey[i], "(Even Numbers)")
    }
}
console.log("----------------------------------------------------")

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