// console.log("Hello From intro to js tasks");

// Tasks-1: 
let haveMoney = 1000;

let orangesApplesTotalCosts = 700;

const shopKeeperReturn = haveMoney - orangesApplesTotalCosts;

console.log("Tasks-1: returnMoney: ", shopKeeperReturn);

// Tasks-2: 
let mathematics = 75.25, biology=65, chemistry = 80, physics = 35.45, bangla = 99.50;

const sumOfMarks = mathematics + biology + chemistry + physics + bangla;

const avgMarks = (sumOfMarks / 5).toFixed(2);
console.log("Tasks-2: AvgMarks: ", parseFloat(avgMarks));


// tasks-3:

const givenNumber = 119;

const remainder = givenNumber % 5;

console.log("Tasks-3: remainder:", remainder);


// Tasks-4: 
var a = isNaN("11");
console.log("firstOne: ", a);

var a = isNaN(2-10);
console.log("secondOne: ", a);

/* 
// context: 
isNaN method checks,
the given value is num or not a number.
    if the given value is number it return false
and also, if the given Number is string or  
    others type it returns true.

// Explanation: 
here, firstOne is a string but isNaN method can check the possibilities(check both either its string or number) and return false for the given value because it could be a number after convertion with parseInt().

the secondOne is substract two values and return num. According to isNaN method it's a number and return false.


*/
