/* // Tasks-1: 

const numbers = ["banana", "orange", "apple", "jackfruit", "guava"];

console.log(numbers[3]);
// change
numbers[2] = "multa";
console.log(numbers); */


/* // Tasks-2: 

const touristDestinations = ["Rajshahi", "thiland", "canada", "Australia", "europe"];

// add 1 place
touristDestinations.push("hongkong");

// add 2 more place
touristDestinations.push("NewYork", "luxemburg");

// remove 1 place
touristDestinations.pop();

console.log(touristDestinations); */


/* 
// Tasks-3: 
const books = ["kathPencil", "suvroGacheBone", "Suvro", "himu"];

// check is book present in this array
const searchBook = books.includes("javascript");
// console.log(searchBook);
const result = (searchBook) ? console.log("present") : console.log("not present"); */


// Tasks-4:
const num = 5;

let marks = [80, 40];

const devices = ["laptop", "mouse", "pendrive"];

const books = true;

// check which onw is array among of them
const result = Array.isArray(devices) ? console.log("Variable is an array") : console.log("variable is not an array");



// Tasks-5: 
const booksList1 = ["science", "physics", "chemistry"];
const booksList2 = ["javascript", "geometry"]; 

const combineBooksList = booksList1.concat(booksList2);

console.log(booksList1);
console.log(booksList2);
console.log(combineBooksList);