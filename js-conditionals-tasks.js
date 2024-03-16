// Tasks-1: 

const burgerPrice = 1000;

if (burgerPrice >= 500) {
    console.log("yay! you get a free coke");
} else {
    console.log("pay 30tk for coke");
}


// Tasks-2: 
const weight = 85, height = 5.8;

const feetToInches = parseInt(height) * 12;
// console.log(feetToInches);

const restInches = (height - parseInt(height)).toFixed(1) * 10;
// console.log(restInches);

const TotalInches = feetToInches + restInches;
// console.log(TotalInches);

const heightInchToMeter = (TotalInches * 0.0254);
// console.log(heightInchToMeter);



let BMI = (weight / Math.pow(heightInchToMeter, 2)).toFixed(1);
// console.log(BMI);

if (BMI < 18.5) {
    console.log(BMI, "You are underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log(BMI, "You are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log(BMI, "you are overweight");
} else {
    console.log(BMI, "you are lose")
}


// Tasks-3: 
const studentMarks = [45, 60, 72, 88, 95];

for (mark of studentMarks) {
    if (mark >= 90) {
        console.log("You Got A", mark);
    } else if (mark >= 80) {
        console.log("You got B", mark);
    } else if (mark >= 70) {
        console.log("You got C", mark);
    } else if (mark >= 60) {
        console.log("You got D", mark);
    } else if (mark <= 59) {
        console.log("You got F", mark);
    } else {
        console.log("Input your number correctly");
    }
}
console.log("\n");




// Tasks-4: 

const friendGivenScores = [60, 35, 55];
let myScore = 95;

// my-score
if (myScore > 80) {

    for (score of friendGivenScores) {
        // friend-score
        if (score > 80) {
            console.log("GO FOR LUNCH", score);
        }
        else if (score >= 60 && score < 80) {
            console.log("good luck next time", score);
        }
        else if (score >= 40 && score < 60) {
            console.log("good luck next time", score);
        }
        else if (score < 40) {
            console.log("block your friend", score);
        }
    }
}

else if (myScore < 80) {
    console.log("go to home and sleep and act sad");
}


// Tasks-5:

const num1 = 25, num2 = 15;
let result; 

// solve by if-else
/* if(num1 > num2){
    result = Math.pow(num1, 2) ;
    console.log("double of num1: ", result);
}else{
    result = num1 + num2;
    console.log("sum of num1 and num2: ", result);
} */


// solve by ternary operator: 
result = (num1 > num2)? Math.pow(num1, 2): num1 + num2;
console.log(result);


// Tasks-6: 
const ages = [8,45,62, "students"];

for(let age of ages){
    if(age < 10){
        console.log("children: You get a free ticket", age);
    }
    else if(age == "students"){
        console.log("Student: You get a 50% discount on ticket", age);
    }
    else if(age >= 60){
        console.log("Senior Citizens gets 15% Discount", age);
    }
    else{
        console.log("Regular: Your ticket fee 800 tk only", age);
    }
}
