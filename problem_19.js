

// problem_19

// Problem 19: Check Armstrong Number (3 digit)
// Write a program to check if a number is an Armstrong number.
// Hint: Armstrong = sum of cubes of digits = number.
// Sample Input/Output:

// Input: 153 → Output: Armstrong
// Input: 123 → Output: Not Armstrong



// slove

let number = 153;

let numstring = number.toString();
let a = (numstring[0]);
let b = (numstring[1]);
let c = (numstring[2]);

let sum = (a*a*a) + (b*b*b) + (c*c*c);


if(sum == number){
    console.log("Armstrong");
}else{
    console.log("Not Armstrong");
}



// output: Armstrong