//A. Part 1: Coding Questions (7.5 Grade):
//1-
let str = "123";
let result =Number(str)+7;
console.log(result);

//2-
function CheckValue(value){
if(!value){
    return "Invalid";
}
return value;
}
console.log(CheckValue(0));

//3-
for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}

//4-
let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);

//5-
let arr1 = [1, 2, 3];

let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray); 


//6-
function getDay(dayNumber) {

    switch (dayNumber) {

        case 1:
            return "Sunday";

        case 2:
            return "Monday";

        case 3:
            return "Tuesday";

        case 4:
            return "Wednesday";

        case 5:
            return "Thursday";

        case 6:
            return "Friday";

        case 7:
            return "Saturday";

        default:
            return "Invalid Day";
    }
}

console.log(getDay(2)); 

//7-
let words = ["a", "ab", "abc"];

let lengths = words.map(function(word) {
    return word.length;
});

console.log(lengths); 

//8-
function checkDivisibility(num) {

    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    }

    return "Not divisible by both";
}

console.log(checkDivisibility(15));

//9-
const square = (num) => {
    return num * num;
};

console.log(square(5)); 

//10-
const person = {
    name: "youmna",
    age: 25
};

function getPersonInfo(person) {

    const { name, age } = person;

    return `${name} is ${age} years old`;
}

console.log(getPersonInfo(person));

//11-

function sum(...numbers) {

    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5)); 